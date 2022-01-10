package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
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
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.CarGroupDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property= {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/car-group/list",
		"sling.servlet.paths=" + "/services/car-group/save",
		"sling.servlet.paths=" + "/services/car-group/delete"})
public class CarGroupServlet extends SlingAllMethodsServlet {
	
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
		path = path.substring(path.lastIndexOf("/")+1);
		
		if(path.equals("list")) {
			
			// get carGroup List
			getCargroupList(request, response);
			
		} else if (path.equals("save")) {
			
			// add new carGroup
			saveCarGroup(request, response);
			
		} else if (path.equals("delete")) {
			
			// delete carGroup
			deleteCarGroup(request, response);
			
		}
	}
	
	
	// get carGroup List
	private void getCargroupList(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String parameter = request.getParameter("data");
		
		String modelCode = request.getParameter("modelCode");
		String modelYear = request.getParameter("modelYear");
		
		CarGroupDto carGroupParams = mapper.readValue(parameter, CarGroupDto.class);
		
		List<CarGroupDto> result = crudService.getCarGroupListAPI(modelCode, modelYear);
		
		String json = new Gson().toJson(result);
		
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(json);
		
	}
	
	
	// add new carGroup
	private void saveCarGroup (SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
	
		ObjectMapper mapper = new ObjectMapper();
		
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		CarGroupDto carGroupParams = mapper.readValue(parameter, CarGroupDto.class);
		
		String result = crudService.saveCarGroup(carGroupParams);
		
		
		if(result != null) {
			
			response.setHeader("Location", redirect);
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.print(result);
			
		} else {
		
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			
		}
		
	}
	
	
	// delete carGroup
	private void deleteCarGroup (SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");

		CarGroupDto carGroupParams = mapper.readValue(parameter, CarGroupDto.class);
		String result = crudService.deleteCarGroup(carGroupParams);
		
		if(result != null) {
			
			response.setHeader("Location", redirect);
			PrintWriter out = response.getWriter();
			out.println(result);
			
		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}
	}
	

}
