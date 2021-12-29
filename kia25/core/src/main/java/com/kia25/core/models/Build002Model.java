package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CarGroupDto;
import com.kia25.core.rest.client.dto.ModelDetailListDto;
import com.kia25.core.rest.client.dto.ModelDetailListDtoResults;
import com.kia25.core.rest.client.dto.TransmissionDto;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002Model {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Model.class);
	BuildYourCarService service = new BuildYourCarServiceImpl();
	
	// 파라미터 값을 받아오기 위해 선언
	@Self
    private SlingHttpServletRequest request;
	
	private String modelCode = null;
	private String modelYear = null;
	private String firstPage = null;
	
	private ModelDetailListDtoResults detailResults;
	private ModelDetailListDto detailData;
	private List<CarGroupDto> carGroupList;
	private List<TransmissionDto> transmissionList;
	private List<TrimDto> trimList;
	
	
	@Inject
	private Resource resource;
	
	@PostConstruct
	public void activate() throws Exception{
		
		try {
			
			/**
			 * 파라미터에서 modelCode 받아와서 변수 선언
			 */
			modelCode = request.getParameter("modelCode");
			modelYear = request.getParameter("modelYear");
			
			detailResults = service.getModelDetailAPI(modelCode, modelYear);
			
			detailData = detailResults.getData();
			carGroupList = detailData.getCarGroupList();
			transmissionList = detailData.getTransmissionList();
			trimList = detailData.getTrimList();
				
			ValueMap valueMap = resource.getValueMap();
			firstPage = (String)valueMap.getOrDefault("firstPage", null);
			
			firstPage += ".html";
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}

	
	/**
	 * getter / setter
	 */
	
	public String getModelCode() {
		return modelCode;
	}
	
	
	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}
	
	
	public String getModelYear() {
		return modelYear;
	}


	public void setModelYear(String modelYear) {
		this.modelYear = modelYear;
	}


	public ModelDetailListDtoResults getDetailResults() {
		return detailResults;
	}

	
	public void setDetailResults(ModelDetailListDtoResults detailResults) {
		this.detailResults = detailResults;
	}


	public ModelDetailListDto getDetailData() {
		return detailData;
	}


	public void setDetailData(ModelDetailListDto detailData) {
		this.detailData = detailData;
	}


	public List<CarGroupDto> getCarGroupList() {
		return carGroupList;
	}


	public void setCarGroupList(List<CarGroupDto> carGroupList) {
		this.carGroupList = carGroupList;
	}


	public List<TransmissionDto> getTransmissionList() {
		return transmissionList;
	}


	public void setTransmissionList(List<TransmissionDto> transmissionList) {
		this.transmissionList = transmissionList;
	}


	public List<TrimDto> getTrimList() {
		return trimList;
	}


	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}


	public String getFirstPage() {
		return firstPage;
	}


	public void setFirstPage(String firstPage) {
		this.firstPage = firstPage;
	}


	
}