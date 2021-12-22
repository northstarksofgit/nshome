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

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helper {

	private static final Logger log = LoggerFactory.getLogger(Build003Helper.class);

	@Inject
	private Resource resource;

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

	private String modelPage = null;
	private String trimPage = null;
	private String colorPage = null;
	private String optionPage = null;
	private String shippingPage = null;

	/*
	 * colorAllList 한번만 호출하기 위함 colorData inte, exte 이외의 데이터 용 colorList 인테리어용
	 * exteriorList 익스테러어 용
	 */

	@PostConstruct
	public void activate() throws IOException {

		ValueMap valueMap = resource.getValueMap();

		try {

			getModelCode = request.getParameter("modelCode").toUpperCase();
			getTrimCode = request.getParameter("trimCode");

			modelPage = (String) valueMap.getOrDefault("lineupModel", null);
			modelPage += ".html?step=1";

			trimPage = (String) valueMap.getOrDefault("lineupTrim", null);
			trimPage += ".html?step=2&modelCode=" + getModelCode;

			colorAllList = service.getColorAPI(getModelCode, getTrimCode);
			colorData = colorAllList.getData();
			exteriorList = colorData.getExteriorList();
			interiorList = colorData.getInteriorList();

		} catch (Exception e) {
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
//private List<Map<String, Object>> colorGroupList = new ArrayList<Map<String, Object>>();

//for (ColorDto colorGroup : exteriorList) {
//
//	Map<String, Object> colorGroupMap = new HashMap<>();
//
//	colorGroupMap.put("extColorCode", colorGroup.getColorCode());
//	colorGroupMap.put("extColorName", colorGroup.getColorName());
//	colorGroupMap.put("extColorPath", colorGroup.getColorImgPath());
//	colorGroupList.add(colorGroupMap);
//}
