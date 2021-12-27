package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CompleteListDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build006Helper {

	private static final Logger log = LoggerFactory.getLogger(Build006Helper.class);

	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();

	@Inject
	private Resource resource;

	@Self
	private SlingHttpServletRequest request;

	private CompleteListDto completeData;

	private String getModelCode = null;
	private String getTrimCode = null;
	private String getExtCode = null;
	private String getIntCode = null;
	private String getOptionCode = null;

	private String modelPage = null;
	private String trimPage = null;
	private String colorPage = null;
	private String optionPage = null;
	private String shippingPage = null;

	@PostConstruct
	public void activate() throws IOException {

		ValueMap valueMap = resource.getValueMap();

		try {

			getModelCode = request.getParameter("modelCode").toUpperCase();
			getTrimCode = request.getParameter("trimCode");
			getExtCode = request.getParameter("ext");
			getIntCode = request.getParameter("int");
			getOptionCode = request.getParameter("option");

			modelPage = (String) valueMap.getOrDefault("lineupModel", null);
			modelPage += ".html?step=1";

			trimPage = (String) valueMap.getOrDefault("lineupTrim", null);
			trimPage += ".html?step=2&modelCode=" + getModelCode;

			colorPage = (String) valueMap.getOrDefault("lineupColor", null);
			colorPage += ".html?step=3&modelCode=" + getModelCode + "&trimCode=" + getTrimCode;
			
			optionPage = (String) valueMap.getOrDefault("lineupOption", null);
			optionPage += ".html?step=4&modelCode=" + getModelCode + "&trimCode=" + getTrimCode + "&ext=" + getExtCode + "&int=" + getIntCode;
			
			shippingPage = (String) valueMap.getOrDefault("lineupShipping", null);
			shippingPage += ".html?step=5&modelCode=" + getModelCode + "&trimCode=" + getTrimCode + "&ext=" + getExtCode + "&int=" + getIntCode + "&option=" + getOptionCode;

			completeData = service.getCompleteAPI(getModelCode, getTrimCode, getExtCode, getIntCode, getOptionCode)
					.getData();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public CompleteListDto getCompleteData() {
		return completeData;
	}

	public String getModelPage() {
		return modelPage;
	}

	public String getTrimPage() {
		return trimPage;
	}

	public String getColorPage() {
		return colorPage;
	}

	public String getOptionPage() {
		return optionPage;
	}

	public String getShippingPage() {
		return shippingPage;
	}

}
