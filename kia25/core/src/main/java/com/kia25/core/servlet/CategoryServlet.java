package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

<<<<<<< Updated upstream
@Component(service = Servlet.class, property = {
		"sling.servlet.methods=" + HttpConstants.METHOD_POST, 
		"sling.servlet.paths=" + "/services/category/save",
		"sling.servlet.paths=" + "/services/category/delete",
		"sling.servlet.paths=" + "/services/category/update"})
public class CategoryServlet extends SlingAllMethodsServlet {
	
    private static final Logger LOG = LoggerFactory.getLogger(CategoryServlet.class);
    
    @Reference
    CrudService crudService = new CrudServiceImpl();

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
    	
    	
    	LOG.info("Category Servlet doPost started");
    	
    	/*
    	 * URL path별로 사용할 API분기 처리
    	 */
    	String path  = request.getRequestURI();	
    	path = path.substring(path.lastIndexOf("/")+1);
    	
    	
    	if(path.equals("save")) {
    		
    		/*
    		 * new category save
    		 */
    		saveCategory(request, response);
    		
    	}else if(path.equals("delete")){
    		
    		/*
    		 * delete category
    		 */
    		deleteCategory(request, response);
    		
    	}else if(path.equals("update")) {
    		
    		/*
    		 * update category
    		 */
    		
    		updateCategory(request, response);
    	}

    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
    
    
    
    
    
    
    
=======
@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_POST,
		"sling.servlet.paths=" + "/services/category/save", "sling.servlet.paths=" + "/services/category/delete" })
public class CategoryServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(CategoryServlet.class);

	@Reference
	CrudService crudService = new CrudServiceImpl();

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {

		LOG.info("Category Servlet doPost started");

		/*
		 * URL path별로 사용할 API분기 처리
		 */
		String path = request.getRequestURI();
		path = path.substring(path.lastIndexOf("/") + 1);

		if (path.equals("save")) {

			/*
			 * new category save
			 */
			saveCategory(request, response);

		} else if (path.equals("delete")) {

			/*
			 * delete category
			 */
			deleteCategory(request, response);
		}

	}
>>>>>>> Stashed changes

	private void updateCategory(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		String result = "";
		String redirect = request.getParameter("redirect");
		
		CategoryDto categoryDto = new CategoryDto();
		
		categoryDto.setCategoryCode(request.getParameter("categoryCode"));
		categoryDto.setCategoryName(request.getParameter("categoryName"));
		
		
		result = crudService.updateCategory(categoryDto);

		
        if (result != null) {
            response.setHeader("Location", redirect);
            response.setContentType("text");
            PrintWriter out = response.getWriter();
            out.println(result);
            return;
            
        } else {
        	response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
        
		
	}








	private void deleteCategory(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = (String) request.getParameter("categoryCode");

		String[] categoryCode = parameter.split(",");


		ArrayList<CategoryDto> categoryList = new ArrayList<>();

		for (String s : categoryCode) {

			CategoryDto categoryDto = new CategoryDto();
			categoryDto.setCategoryCode(s);

			result = crudService.deleteCategory(categoryDto);
		}

		if (result != null) {
			response.setHeader("Location", redirect);
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.println(result);
			return;

		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}

	}

	private void saveCategory(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		String redirect = request.getParameter("redirect");

		try {
			CategoryDto categoryDto = new CategoryDto();

			categoryDto.setCategoryCode((String) request.getParameter("categoryCode"));
			categoryDto.setCategoryName((String) request.getParameter("categoryName"));

			LOG.info("category {}", categoryDto.getCategoryCode());

			String result = crudService.saveCategory(categoryDto);

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

}