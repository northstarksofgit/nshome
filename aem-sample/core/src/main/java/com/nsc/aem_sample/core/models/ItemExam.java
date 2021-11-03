package com.nsc.aem_sample.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

//이 VO를 이용해서 가져온 노드의 data(resource)와 adapt할 것이기 때문에
// adaptables 옵션에 resource를 추가해준다.
@Model(adaptables = { Resource.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ItemExam {

	//node의 name과 mapping하기 위한 의존성 주입
	@Inject
	String desc;

	
	//setter와 getter!
	//data를 mapping해서 설정하고 리스트에 add하기 위해 필요하다!
	
	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
	
}
