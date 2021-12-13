package com.kia25.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CarGroupDto;
import com.kia25.core.rest.client.dto.CarGroupListDto;
import com.kia25.core.rest.client.dto.CarGroupListDtoResults;
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
	
	/* SlingHttpServletRequest로 대체함 (파라미터 받아오기 위한 선언)
	@Inject
	private SlingScriptHelper slingScriptHelper;
	
	// SlingModel 로 진행하기 때문에 WCMUsePojo를 extends 하는 대신 import 하고 선언해줌
	private WCMUsePojo a; 
	*/
	
	// html에서 파라미터 값 가져다 사용하기 위해서 메소드 외부에 선언
	private String reqParam = null;
	
	/**
	 * carGroup 리스트
	 */
	private List<CarGroupDto> carGroupList;
	private CarGroupListDto carData;
	private CarGroupListDtoResults carResults;
	
	
	/**
	 * trim 리스트
	 */
//	private List<TrimDto> trimList = new ArrayList<>();;
	private TrimDto trimList;
	
	 
	@PostConstruct
	public void activate() throws Exception{
		
		/**
		 * 파라미터에서 modelCode 받아와서 변수 선언
		 */
		reqParam = request.getParameter("car");
		// 파라미터 값 받아오는건 SlingScriptHelper 사용해서 넘겨도 가능함! 
		// 단, URL에서 editor.html 부분만 삭제해주면 
		// String modelCode = (String) slingScriptHelper.getRequest().getParameter("modelCode");
		log.info("reqParam :::: {}", reqParam);

		
		carResults = service.getCarGroupListAPI();
		log.info(carResults.toString());
		
		carData = carResults.getData();
		carGroupList = carData.getCarGroupList();

		for(CarGroupDto aa : carGroupList){
			for(TrimDto bb : aa.getTrimList()) {
				aa.setTrimList(bb);;
			}
			
		}
		
//		carResults.getData();
//		carGroupList = service.getCarGroupListAPI().getCarGroupList();


//		log.info("getGroupList :::: {}", carGroupList);
		
		/*
		trimList = service.getTrimListAPI().getTrimList();
		//log.info("getTrimList :::: {}", trimList);
		*/		
				
	}
	
	/**
	 * getter / setter
	 */
	
	public String getReqParam() {
		return reqParam;
	}

	public void setReqParam(String reqParam) {
		this.reqParam = reqParam;
	}

	public List<CarGroupDto> getCarGroupList() {
		return carGroupList;
	}

	public void setCarGroupList(List<CarGroupDto> carGroupList) {
		this.carGroupList = carGroupList;
	}
	
	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}

	public CarGroupListDto getCarData() {
		return carData;
	}

	public void setCarData(CarGroupListDto carData) {
		this.carData = carData;
	}

	public CarGroupListDtoResults getCarResults() {
		return carResults;
	}

	public void setCarResults(CarGroupListDtoResults carResults) {
		this.carResults = carResults;
	}

	
	
	
}