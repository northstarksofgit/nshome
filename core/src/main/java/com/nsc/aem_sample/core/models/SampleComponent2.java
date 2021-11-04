package com.nsc.aem_sample.core.models;

import org.apache.sling.api.resource.ValueMap;

import com.adobe.cq.sightly.WCMUsePojo;

public class SampleComponent2 extends WCMUsePojo{
	
	private String staticValue;
	private String dynamicValue;
	private String reqValue;
	
	public void activate() throws Exception {

		staticValue = "Static Data";
		dynamicValue = null;
		reqValue = null;
		
		ValueMap vm = getProperties();
		
		dynamicValue = (String) vm.getOrDefault("text", "Default Data");
		reqValue = (String) getSlingScriptHelper().getRequest().getParameter("param");
	}

	public String getStaticValue() {
		return staticValue;
	}

	public String getDynamicValue() {
		return dynamicValue;
	}

	public String getReqValue() {
		return reqValue;
	}
	
	
}
