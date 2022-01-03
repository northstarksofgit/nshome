package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003CrudModel {

	private final static Logger log = LoggerFactory.getLogger(Build003CrudModel.class);
	CrudService service = new CrudServiceImpl();

	@Self
	private SlingHttpServletRequest request;
	
	private List<ColorDto> colorList;

	@PostConstruct
	public void activate() throws Exception {

		try {

			String modelCode = request.getParameter("modelCode")==null ? "" : request.getParameter("modelCode");
			String trimCode = request.getParameter("trimCode")==null ? "" : request.getParameter("trimCode");
			String modelYear = request.getParameter("modelYear")==null ? "" : request.getParameter("modelYear");

			colorList = (service.getColorListAPI(modelCode, trimCode, modelYear));

		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("error Msg ***" + ex.getMessage());
		}

	}
	
	public List<ColorDto> getColorList() {
		return colorList;
	}
	

}