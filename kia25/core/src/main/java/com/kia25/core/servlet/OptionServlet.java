package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property = {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/option/list",
		"sling.servlet.paths=" + "/services/option/save",
		"sling.servlet.paths=" + "/services/option/delete" })
public class OptionServlet extends SlingAllMethodsServlet {
	
    private static final Logger log= LoggerFactory.getLogger(OptionServlet.class);
    
    @Reference
    CrudService crudService = new CrudServiceImpl();

    
    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
    	String path  = request.getRequestURI();

    	path = path.substring(path.lastIndexOf("/")+1);
    	
    	if(path.equals("list")) {
    		getOptionList(request, response);
    	} else if(path.equals("delete")) {
    		deleteOption(request, response);
    	} else if(path.equals("save")) {
    		saveOption(request, response);
    	}
    }    
    
    
    private void getOptionList(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
    	ObjectMapper mapper = new ObjectMapper();
    	String parameter = request.getParameter("data");
    	OptionDto optionParams = mapper.readValue(parameter, OptionDto.class);
    	
    	Map<String,Object> dataMaps = new HashMap<>();
    	OptionDto[] result = crudService.getOptionListAPI(optionParams);
    	TrimDto select = crudService.getSelectTrimAPI(optionParams.getTrimCode().toString());
    	
		dataMaps.put("list", result);
		dataMaps.put("select", select);
//		OptionDto[] result = crudService.getOptionListAPI(request.getParameter("trimCode"));
		
		
        String json = new Gson().toJson(dataMaps);
	    
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println(json);
	}
    
    
    
    
    
	private void deleteOption(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
	
		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		OptionDto optionParams = mapper.readValue(parameter, OptionDto.class);

		result = crudService.deleteOption(optionParams);
		
        if (result != null) {
            response.setHeader("Location", redirect);
            PrintWriter out = response.getWriter();
            out.println(result);
//            return;
            
        } else {
        	response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
	}




	private void saveOption(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		
		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		log.info("params = {}", parameter);
		
		OptionDto optionParams = mapper.readValue(parameter, OptionDto.class);
		
		
		result = crudService.saveOption(optionParams);

		if (result != null) {
            response.setHeader("Location", redirect);
            PrintWriter out = response.getWriter();
            out.println(result);
//            return;
            
        } else {
        	response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
	}





	
   

}
