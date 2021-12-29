package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.service.CrudService;

@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "/services/db/category", methods = "POST" , selectors = "save" , extensions = "")
public class CategoryServlet extends SlingAllMethodsServlet {
	
    private static final Logger LOG = LoggerFactory.getLogger(CategoryServlet.class);
    
    @Reference
    CrudService crudService;

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        String redirect = request.getParameter("redirect");
        try {
            CategoryDto categoryDto = new CategoryDto();
            
            categoryDto.setCategoryCode((String)request.getParameter("categoryCode"));
            categoryDto.setCategoryName((String)request.getParameter("categoryName"));

            LOG.trace("category {}", categoryDto.getCategoryCode());
            String result = crudService.saveCategory(categoryDto);
            LOG.trace("response {}", result);
            if (result != null) {
                response.setHeader("Location", redirect);
                response.setContentType("application/json");
                PrintWriter out = response.getWriter();
                out.println("{}");
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

}