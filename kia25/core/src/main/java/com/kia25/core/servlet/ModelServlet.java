package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property = {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/model/list",
		"sling.servlet.paths=" + "/services/model/save",
		"sling.servlet.paths=" + "/services/model/delete" })
public class ModelServlet extends SlingAllMethodsServlet {
	
    private static final Logger LOG = LoggerFactory.getLogger(ModelServlet.class);
    
    @Reference
    CrudService crudService = new CrudServiceImpl();

    
    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        
    	LOG.info("ModelServlet doPost started");
    	
    	/*
    	 * URL path별로 사용할 API분기 처리
    	 */
    	String path  = request.getRequestURI();	
    	path = path.substring(path.lastIndexOf("/")+1);
    	
    	
    	if(path.equals("list")) {
    		
    		/*
    		 * get model list
    		 */
    		getModelList(request, response);
    		
    	}else if(path.equals("delete")) {
    		
    		/*
    		 * delete model
    		 */
    		deleteModel(request, response);
    	}else if(path.equals("save")) {
    		
    		/*
    		 * save model
    		 */
    		saveModel(request, response);
    	}


    }

    
    
    
    
    
    
    
    
    
	private void saveModel(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		String redirect = request.getParameter("redirect");
		
		
	    try {
	        ModelDto modelDto = new ModelDto();
	        
	        modelDto.setCategoryCode((String)request.getParameter("categoryCode"));
	        modelDto.setModelCode((String)request.getParameter("modelCode"));
	        modelDto.setModelYear((String)request.getParameter("modelYear"));
	        modelDto.setModelName((String)request.getParameter("modelName"));
	        modelDto.setCarImagePath((String)request.getParameter("carImagePath"));
	        modelDto.setSortOrder(Integer.parseInt(request.getParameter("sortOrder")));
	        modelDto.setUseYn((String)request.getParameter("useYn"));
	      
	        LOG.info("modelDto {}", modelDto.getModelName());
	        
	        String result = crudService.saveModel(modelDto);
	        
	        LOG.info("response {}", result);
	        
	        if (result != null) {
	            response.setHeader("Location", redirect);
	            response.setContentType("application/json");
	            PrintWriter out = response.getWriter();
	            out.println(result);
	            return;
	            
	        } else {
	        	response.sendError(HttpServletResponse.SC_BAD_REQUEST);
	        }
	        
	    } catch (IOException e) {
	        LOG.error("{} ({})", e, e.getMessage());
	        response.setHeader("Location", redirect);
	        response.setContentType("application/json");
	        PrintWriter out = response.getWriter();
	        out.println(e.getMessage());
	    }
		
		
		
		
	}










	private void deleteModel(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
	
		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		LOG.info("param: "+parameter);
		
		ArrayList<ModelDto> modelList = mapper.readValue(parameter, new TypeReference<ArrayList<ModelDto>>(){});
		
		for(ModelDto m :  modelList) {
			result = crudService.deleteModel(m);
		}
		
		
        if (result != null) {
            response.setHeader("Location", redirect);
            PrintWriter out = response.getWriter();
            out.println(result);
            return;
            
        } else {
        	response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
		
		
		
	}










	private void getModelList(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		
		List<ModelDto> result = crudService.getModelListAPI(request.getParameter("categoryCode"));

		result.sort(new Comparator<ModelDto>() {
			
            @Override
            public int compare(ModelDto arg0, ModelDto arg1) {
                   
                   int age0 = arg0.getSortOrder();
                   int age1 = arg1.getSortOrder();
                   
                   if (age0 == age1)
                         return 0;
                   else if (age0 > age1)
                         return 1;
                   else
                         return -1;
            }
        });
		
		
		String json = new Gson().toJson(result);
	    
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println(json);
		
	}
   

}
