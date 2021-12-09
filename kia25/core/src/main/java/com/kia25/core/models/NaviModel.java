package com.kia25.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NaviModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(NaviModel.class);
	
	/*
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	*/
	
	/*
	 * get 방식으로 넘어온 parameter를 처리하기 위함
	 */
	@Self
    private SlingHttpServletRequest request;

	/*
	 *  모델코드
	 */
	private String modelCode;
	
	/*
	 *트림 코드 
	 */
	private String trimCode;
	
	/*
	 * 외부 인테리어 코드
	 */
	private String exteriorCode;
	
	/*
	 * 내부 인테리어 코드
	 */
	private String interiorCode;
	
	/*
	 * ??
	 */
	private String dpcd;
	
	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		
		/*
		 * 스텝별로 넘어오는 파라미터
		 * 
		 * 2 step: car=EV6.dpcd=N
		 * 3 step: car=EV6-LEV.trim=CVJJ5VD31-A.dpcd=N
		 * 4 step: car=EV6-LEV.trim=CVJJ5VD31-A.dpcd=N.ext=ABP.int=IN_EV6_BL
		 * 
		 * 
		 * carid(modelCode), dpcd(??), trim(trimCode), ext(exteriorCode), int(interiorCode)
		 * 
		 */
		
		modelCode = request.getParameter("carid");
		trimCode = request.getParameter("trimCode");
		exteriorCode = request.getParameter("trim");
		interiorCode = request.getParameter("ext");
		dpcd = request.getParameter("dpcd");
		
		
		/*
		LOG.info("modelCode: "+modelCode);
		LOG.info("trimCode: "+trimCode);
		LOG.info("exteriorCode: "+exteriorCode);
		LOG.info("interiorCode: "+interiorCode);
		LOG.info("dpcd: "+dpcd);
		*/
		
		
		
		
		
		
	}



	public String getModelCode() {
		return modelCode;
	}



	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}



	public String getTrimCode() {
		return trimCode;
	}



	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}



	public String getExteriorCode() {
		return exteriorCode;
	}



	public void setExteriorCode(String exteriorCode) {
		this.exteriorCode = exteriorCode;
	}



	public String getInteriorCode() {
		return interiorCode;
	}



	public void setInteriorCode(String interiorCode) {
		this.interiorCode = interiorCode;
	}



	public String getDpcd() {
		return dpcd;
	}



	public void setDpcd(String dpcd) {
		this.dpcd = dpcd;
	}


	
	
}
