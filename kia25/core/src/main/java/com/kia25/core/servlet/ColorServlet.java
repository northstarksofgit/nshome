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
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_POST,
		"sling.servlet.paths=" + "/services/color/list", 
		"sling.servlet.paths=" + "/services/color/save",
		"sling.servlet.paths=" + "/services/color/delete" 
		})
public class ColorServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(ColorServlet.class);
	private List<ColorDto> colorList;

	@Reference
	CrudService crudService = new CrudServiceImpl();
	
	@Self
	private SlingHttpServletRequest request;
	
	
	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {

		LOG.info("###### ColorServlet doPost started #####");

		/*
		 * URL path별로 사용할 API분기 처리
		 */
		String path = request.getRequestURI();
		path = path.substring(path.lastIndexOf("/") + 1);

		if (path.equals("list")) {

			/*
			 * save model
			 */
			
			listColor();
			

		} else if (path.equals("save")) {

			/*
			 * save model
			 */
			
			saveColor(request, response);
			
			
		} else if (path.equals("delete")) {

			/*
			 * delete model
			 */
			
			deleteColor(request, response);
			
		}

	}

	private void listColor() throws IOException {

		try {

			String modelCode = request.getParameter("modelCode")==null ? "" : request.getParameter("modelCode");
			String trimCode = request.getParameter("trimCode")==null ? "" : request.getParameter("trimCode");
			String carOptionCode = request.getParameter("carOptionCode")==null ? "" : request.getParameter("carOptionCode");
			String modelYear = request.getParameter("modelYear")==null ? "" : request.getParameter("modelYear");
			String searchWord = request.getParameter("searchWord")==null ? "" : request.getParameter("searchWord");

		 	colorList = (crudService.searchColorListAPI(modelCode, trimCode, carOptionCode, modelYear, searchWord));
		 	
		 	LOG.info("###### List started #####");
			System.out.println("listColor message");
			
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("error Msg ***" + ex.getMessage());
		}

	}

	private void saveColor(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		ObjectMapper mapper = new ObjectMapper();

		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");

		LOG.info("param: " + parameter);
		LOG.info("###### Save started #####");
		System.out.println("saveColor message");

		ArrayList<ColorDto> colorList = mapper.readValue(parameter, new TypeReference<ArrayList<ColorDto>>() {});

		for (ColorDto m : colorList) {
			result = crudService.saveColor(m);
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

	private void deleteColor(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		ObjectMapper mapper = new ObjectMapper();

		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");

		LOG.info("param: " + parameter);
		LOG.info("###### Delete started #####");
		System.out.println("deleteColor message");

		ArrayList<ColorDto> colorList = mapper.readValue(parameter, new TypeReference<ArrayList<ColorDto>>() {});

		for (ColorDto m : colorList) {
			result = crudService.deleteColor(m);
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
	
	public List<ColorDto> getColorList() {
		return colorList;
	}

}
