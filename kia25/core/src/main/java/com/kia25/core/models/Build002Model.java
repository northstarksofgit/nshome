package com.kia25.core.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CarGroupDto;
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
	
	private String reqParam = null;
	
	//private String modelCode = service.getCarGroupListAPI().getData().getModelCode();
	
	
	/**
	 * carGroup 리스트
	 */
	private List<CarGroupDto> carGroupList;

	
	/**
	 * trim 리스트
	 */
	private List<TrimDto> trimList;
	
	
	/**
	 * transmission 리스트
	 */
	private List<CarGroupDto> transList;
	
	
	/**
	 * transmission trim 리스트
	 */
	private List<TrimDto> transTrimList;
	
	
	private List<Map<String, Object>> test = new ArrayList<Map<String, Object>>();
	
	 
//	@PostConstruct
//	public void activate() throws Exception{
//		
//		/**
//		 * 파라미터에서 modelCode 받아와서 변수 선언
//		 */
//		reqParam = request.getParameter("modelCode");
//
//		// 차종이 EV6인 경우 
//		if(reqParam.equals("EV6")) {
//			
//			carResults = service.getCarGroupListAPI();
//			
//			carData = carResults.getData();
//			carGroupList = carData.getCarGroupList();
//			
//			int size = carGroupList.size();
//				
//			for(CarGroupDto aa : carGroupList){
//				int seq = 1; 
//				
//				for(TrimDto bb : aa.getTrimList()) {
//					
//					Map<String, Object> map = new HashMap<String, Object>();
//					map.put("carGroupCode", aa.getCarGroupCode());
//					map.put("trimCode", bb.getTrimCode());
//					map.put("trimName", bb.getTrimName());
//					map.put("productCode", bb.getProductCode());
//					map.put("sellingPrice", bb.getSellingPrice());
//					map.put("bestYn", bb.getBestYn());
//					map.put("gearboxName", bb.getGearboxName());
//					map.put("compoundFuelEconomy", bb.getCompoundFuelEconomy());
//					map.put("bodyTypeName", bb.getBodyTypeName());
//					map.put("engineCapacityName", bb.getEngineCapacityName());
//					map.put("transmission", bb.getTransmission());
//					map.put("seq", seq++);
//					test.add(map);
//				}
//			}
//			
//		// 차종이 EV6가 아닌 경우 
//		} else {
//			
//			carResults = service.getTrasmissionListAPI();
//			
//			carData = carResults.getData();
//			carGroupList = carData.getCarGroupList();
//			
//			int size = carGroupList.size();
//			
//			for(CarGroupDto trans : carGroupList){
//				int auto_seq = 1; 
//				int manu_seq = 1; 
//				
//				for(TrimDto transTrim : trans.getTrimList()) {
//					
//					Map<String, Object> map = new HashMap<String, Object>();
//					map.put("carGroupCode", trans.getCarGroupCode());
//					map.put("trimCode", transTrim.getTrimCode());
//					map.put("trimName", transTrim.getTrimName());
//					map.put("productCode", transTrim.getProductCode());
//					map.put("sellingPrice", transTrim.getSellingPrice());
//					map.put("bestYn", transTrim.getBestYn());
//					map.put("gearboxName", transTrim.getGearboxName());
//					map.put("compoundFuelEconomy", transTrim.getCompoundFuelEconomy());
//					map.put("bodyTypeName", transTrim.getBodyTypeName());
//					map.put("engineCapacityName", transTrim.getEngineCapacityName());
//					map.put("transmission", transTrim.getTransmission());
//					
//					if(transTrim.getTransmission().equals("automatic")) {
//						
//						map.put("seq", auto_seq++);
//						
//					} else {
//						
//						map.put("seq", manu_seq++);
//						
//					}
//					
//					test.add(map);
//				}
//			}
//		}
//	}
	
	
	/**
	 * getter / setter
	 */
	
	
	
	
	
	
	
	
	
}