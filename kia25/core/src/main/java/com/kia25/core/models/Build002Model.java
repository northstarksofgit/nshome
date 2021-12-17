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
	
	private String reqParam = null;
	
	private ModelDetailListDtoResults detailResults;
	private ModelDetailListDto detailData;
	private List<CarGroupDto> carGroupList;
	private List<TransmissionDto> transmissionList;
	private List<TrimDto> trimList;
	
	private List<Map<String, Object>> detailList = new ArrayList<Map<String, Object>>();
	
	 
	@PostConstruct
	public void activate() throws Exception{
		
		/**
		 * 파라미터에서 modelCode 받아와서 변수 선언
		 */
		reqParam = request.getParameter("modelCode");

		// 차종이 EV6인 경우 
		if(reqParam.equals("EV6")) {
			
			detailResults = service.getModelDetailEAPI();
			detailData = detailResults.getData();
			carGroupList = detailData.getCarGroupList();
			transmissionList = detailData.getTransmissionList();
			trimList = detailData.getTrimList();
		
			
			/**
			 * get carGroup Data
			 */
			for(CarGroupDto carGroup : carGroupList){
				int carGroupSeq = 1; 
				
				Map<String, Object> carGroupMap = new HashMap<>();
				
				carGroupMap.put("carGroupCode", carGroup.getCarGroupCode());
				carGroupMap.put("carGroupName", carGroup.getCarGroupName());
				carGroupMap.put("carImagePath", carGroup.getCarImagePath());
				carGroupMap.put("seq", carGroupSeq++);
				detailList.add(carGroupMap);
			}	
			
			/**
			 * get transmission Data
			 */
			for(TransmissionDto trans : transmissionList) {
				int autoSeq = 1;
				int manuSeq = 1;
				
				Map<String, Object> transMap = new HashMap<>();
				transMap.put("transmissionCode", trans.getTransmissionCode());
				transMap.put("transmissionName", trans.getTransmissionName());
				
				/**
				 * transmissionCode 값에 따라서 seq 증가
				 */
				if(trans.getTransmissionCode().equals("automatic")) {
					transMap.put("seq", autoSeq++);
				} else {
					transMap.put("seq", manuSeq++);
				}
				
				detailList.add(transMap);
			}
			
			
			/**
			 * get trim Data
			 */
			for(TrimDto trim : trimList) {
				int trimSeq = 1;
				
				Map<String, Object> trimMap = new HashMap<>();
				trimMap.put("carGroupCode", trim.getCarGroupCode());
				trimMap.put("transmissionCode", trim.getTransmissionCode());
				trimMap.put("trimCode", trim.getTrimCode());
				trimMap.put("trimName", trim.getTrimName());
				trimMap.put("productCode", trim.getProductCode());
				trimMap.put("sellingPrice", trim.getSellingPrice());
				trimMap.put("bestYn", trim.getBestYn());
				trimMap.put("gearboxName", trim.getGearboxName());
				trimMap.put("compoundFuelEconomy", trim.getCompoundFuelEconomy());
				trimMap.put("bodyTypeName", trim.getBodyTypeName());
				trimMap.put("engineCapacityName", trim.getEngineCapacityName());
				trimMap.put("seq", trimSeq++);
				detailList.add(trimMap);
				
			}
			
				
			
		// 차종이 EV6가 아닌 경우 (성력)
		} else {
			
			detailResults = service.getModelDetailSAPI();
			detailData = detailResults.getData();
			carGroupList = detailData.getCarGroupList();
			transmissionList = detailData.getTransmissionList();
			trimList = detailData.getTrimList();
			
			/**
			 * get carGroup Data
			 */
			for(CarGroupDto carGroup : carGroupList){
				int carGroupSeq = 1; 
				
				Map<String, Object> carGroupMap = new HashMap<>();
				
				carGroupMap.put("carGroupCode", carGroup.getCarGroupCode());
				carGroupMap.put("carGroupName", carGroup.getCarGroupName());
				carGroupMap.put("carImagePath", carGroup.getCarImagePath());
				carGroupMap.put("seq", carGroupSeq++);
				detailList.add(carGroupMap);
			}	
			
			/**
			 * get transmission Data
			 */
			for(TransmissionDto trans : transmissionList) {
				int autoSeq = 1;
				int manuSeq = 1;
				
				Map<String, Object> transMap = new HashMap<>();
				transMap.put("transmissionCode", trans.getTransmissionCode());
				transMap.put("transmissionName", trans.getTransmissionName());
				
				/**
				 * transmissionCode 값에 따라서 seq 증가
				 */
				if(trans.getTransmissionCode().equals("automatic")) {
					transMap.put("seq", autoSeq++);
				} else {
					transMap.put("seq", manuSeq++);
				}
				
				detailList.add(transMap);
			}
			
			
			/**
			 * get trim Data
			 */
			for(TrimDto trim : trimList) {
				int trimSeq = 1;
				
				Map<String, Object> trimMap = new HashMap<>();
				trimMap.put("carGroupCode", trim.getCarGroupCode());
				trimMap.put("transmissionCode", trim.getTransmissionCode());
				trimMap.put("trimCode", trim.getTrimCode());
				trimMap.put("trimName", trim.getTrimName());
				trimMap.put("productCode", trim.getProductCode());
				trimMap.put("sellingPrice", trim.getSellingPrice());
				trimMap.put("bestYn", trim.getBestYn());
				trimMap.put("gearboxName", trim.getGearboxName());
				trimMap.put("compoundFuelEconomy", trim.getCompoundFuelEconomy());
				trimMap.put("bodyTypeName", trim.getBodyTypeName());
				trimMap.put("engineCapacityName", trim.getEngineCapacityName());
				trimMap.put("seq", trimSeq++);
				detailList.add(trimMap);
				
			}
		}
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


	public List<Map<String, Object>> getDetailList() {
		return detailList;
	}


	public void setDetailList(List<Map<String, Object>> detailList) {
		this.detailList = detailList;
	}

	
}