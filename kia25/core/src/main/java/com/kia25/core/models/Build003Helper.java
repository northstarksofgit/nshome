package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helper {

	private static final Logger log = LoggerFactory.getLogger(Build003Helper.class);

	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();

	@Self
	private SlingHttpServletRequest request;

	private ColorListDtoResults colorAllList;

	private List<ColorDto> interiorList;
	private List<ColorDto> exteriorList;
	private ColorListDto colorData;

	private String modelCode = null;
	private String trimName = null;
	
	private String getModelCode = null;
	private String getTrimCode = null;
	
	
	
	/*
	 * colorAllList 한번만 호출하기 위함 colorData inte, exte 이외의 데이터 용 colorList 인테리어용
	 * exteriorList 익스테러어 용
	 */
	
	@PostConstruct
	public void activate() throws IOException {

		
		try {
			getModelCode = request.getParameter("modelCode").toUpperCase();
			getTrimCode = request.getParameter("trimCode");
		//	getExtCode = request.getParameter("ext");
		//	getIntCode = request.getParameter("int");
		//	getOptionCode = request.getParameter("option");
			
			colorAllList = service.getColorAPI(getModelCode, getTrimCode);
			colorData = colorAllList.getData();
			exteriorList = colorData.getExteriorList();
			interiorList = colorData.getInteriorList();
			 
		} catch(Exception e) {
			e.printStackTrace();
		}

	}

	public ColorListDtoResults getcolorAllList() {
		return colorAllList;
	}

	public List<ColorDto> getInteriorList() {
		return interiorList;
	}

	public List<ColorDto> getExteriorList() {
		return exteriorList;
	}

	public ColorListDto getColorData() {
		return colorData;
	}

	public String getModelCode() {
		return modelCode;
	}

	public String getTrimName() {
		return trimName;
	}

}
