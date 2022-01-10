package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Reference;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property= {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/trim/list",
		"sling.servlet.paths=" + "/services/trim/save",
		"sling.servlet.paths=" + "/services/trim/delete"})
public class TrimServlet  extends SlingAllMethodsServlet {
	
	private static final Logger log = LoggerFactory.getLogger(CarGroupServlet.class);
	
	@Reference
	CrudService crudService = new CrudServiceImpl();

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		
		/**
		 * url에 따라서 불러올 api 나눠주기
		 */
		String path = request.getRequestURI();
		path = path.substring(path.indexOf("/")+1);
		
		if(path.equals("list")) {
			
			// get trim List
			getTrimList(request, response);
			
		} else if (path.equals("save")) {
			
			// add new trim
			saveTrim(request, response);
			
		} else if (path.equals("delete")) {
			
			// delete trim
			deleteTrim(request, response);
			
		}
	}

	
	// get trim List
	private void getTrimList(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String parameter = request.getParameter("data");
		
		String modelCode = request.getParameter("modelCode");
		String modelYear = request.getParameter("modelYear");
		
		TrimDto trimPrams = mapper.readValue(parameter, TrimDto.class);
		
		List<TrimDto> result = crudService.getTrimListAPI(modelCode, modelYear);
		
		String json = new Gson().toJson(result);
		
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.println(json);
		
	}

	
	
	// add new trim
	private void saveTrim(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		TrimDto trimParams = mapper.readValue(parameter, TrimDto.class);
		
		String result = crudService.saveTrim(trimParams);
		
		if (result != null) {
			
			response.setHeader("Location", redirect);
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.println(result);
			
		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}
		
	}
	
	
	// delete trim
	private void deleteTrim(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		TrimDto trimDtoParams = mapper.readValue(parameter, TrimDto.class);
		String result = crudService.deleteTrim(trimDtoParams);
		
		if(result != null) {
			
			response.setHeader("Location", redirect);
			PrintWriter out = response.getWriter();
			out.println(result);
			
		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}
		
	}
	
	

}
