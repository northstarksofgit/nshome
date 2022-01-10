package com.kia25.core.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.jcr.Node;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.scr.annotations.Reference;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.TrimDto;
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

		String path = request.getRequestURI();
		path = path.substring(path.lastIndexOf("/") + 1);

		if (path.equals("list")) {
			
			listColor(request, response);

		} else if (path.equals("save")) {

			saveColor(request, response);
			
		} else if (path.equals("delete")) {

			deleteColor(request, response);
			
		}

	}

	public List<ColorDto> listColor(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
    	String parameter = request.getParameter("data");

    	ColorDto colorParams = mapper.readValue(parameter, ColorDto.class);

		Map<String,Object> dataMaps = new HashMap<>();
		List<ColorDto> result = crudService.listColor(colorParams);
    	TrimDto select = crudService.getSelectTrimAPI(colorParams.getTrimCode().toString());
    	
    	
    	
    	
    	
    	
		/* 검색어가 있다면 검색함 */
    	if(!colorParams.getSearchWord().toString().equals("")) {
	    	List<ColorDto> cloList = new ArrayList<ColorDto>();
	    	
	    	List<String> searchWrd = result.stream().map(ColorDto::getColorCode).collect(Collectors.toList());
	
	    	Iterator<ColorDto> it = result.iterator();
	
	    	while(it.hasNext()) {
	    		ColorDto strNxt = it.next();
				
	    		/* 컬러코드만 검색 */
	    		if(searchWrd.indexOf(strNxt.getColorCode().toString()) ==  searchWrd.lastIndexOf(colorParams.getSearchWord().toString())) {
	    			cloList.add(strNxt);
				}
	    	}
	    	
	    	dataMaps.put("list", cloList);
	    	dataMaps.put("select", select);
    	
    	} else if(!colorParams.getUseYn().toString().equals("")) {
    		/* 사용여부 판단 */
        	List<ColorDto> ynList = new ArrayList<ColorDto>();
        	List<String> useYn = result.stream().map(ColorDto::getUseYn).collect(Collectors.toList());
        	Iterator<ColorDto> uyn = result.iterator();
        	
        	while(uyn.hasNext()) {
        		ColorDto strNxt = uyn.next();
    			
        		if(useYn.indexOf(strNxt.getUseYn().toString()) ==  useYn.lastIndexOf(colorParams.getSearchWord().toString())) {
        			ynList.add(strNxt);
    			}
        	 }
        		dataMaps.put("list", ynList);
        		dataMaps.put("select", select);
        		
        	} else {
    	
    		dataMaps.put("list", result);
    		dataMaps.put("select", select);
    	}
    	
        String json = new Gson().toJson(dataMaps);
	    
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println(json);
        return result;
	}

	private void saveColor(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		ObjectMapper mapper = new ObjectMapper();

		String result = "";
		String redirect = request.getParameter("redirect");
		String parameter = request.getParameter("data");
		
		
		ColorDto optionParams = mapper.readValue(parameter, ColorDto.class);

		result = crudService.saveColor(optionParams);
		

		if (result == null) {
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

		ColorDto colorParams = mapper.readValue(parameter, ColorDto.class);
		result = crudService.deleteColor(colorParams);
		
//		ArrayList<ColorDto> colorList = mapper.readValue(parameter, new TypeReference<ArrayList<ColorDto>>() {});
//
//		for (ColorDto m : colorList) {
//			result = crudService.deleteColor(m);
//		}

		if (result != null) {
			response.setHeader("Location", redirect);
			PrintWriter out = response.getWriter();
			out.println(result);
			return;

		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}

	}
	
}
