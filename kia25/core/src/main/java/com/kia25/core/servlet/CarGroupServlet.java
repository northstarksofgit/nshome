package com.kia25.core.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

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
			
			// create new carGroup
			saveCarGroup(request, response);
			
		} else if (path.equals("delete")) {
			
			// delete carGroup
			deleteCarGroup(request, response);
			
		}
	}
	
	
	// get carGroup List
	private void getCargroupList(SlingHttpServletRequest request, SlingHttpServletResponse response) {
		
		
	}
	
	
	// create carGroup
	private void saveCarGroup (SlingHttpServletRequest request, SlingHttpServletResponse response) {
		
		String redirect = request.getParameter("redirect");
		
		
		
		
	}
	
	
	// delete carGroup
	private void deleteCarGroup (SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		
		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");

		CarGroupDto carGroupParams = mapper.readValue(parameter, CarGroupDto.class);
		result = crudService.deleteCarGroup(carGroupParams);
		
		if(result != null) {
			
			
		} else {
			
		}
		
		
	}
	
	

}
