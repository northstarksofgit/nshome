package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
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

import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property = {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/model/list",
		"sling.servlet.paths=" + "/services/model/save" })
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
    	}


    }

    
    
    
    
    
    
    
    
    
	private void getModelList(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		
		List<ModelDto> result = crudService.getModelListAPI(request.getParameter("categoryCode"));

        String json = new Gson().toJson(result);
	    
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println(json);
		
	}
   

}
