package com.nsc.aem_sample.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



//클래스 상속 방식 외에 Sling Model 방식을 사용한다
//클래스 상속 방식 : public class SampleComponent extends WCMUsePojo 
@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SampleComponent{


	//get방식의 url로 넘어온 parameter를 전달하기 위한 slingScriptHelper
	@Inject
	private SlingScriptHelper slingScriptHelper;
	
	//node의 data를 가져오기 위한 resource 
	//이 예제에서는 text node의 데이터와 multifield 노드의 데이터를 가져오기 위해
	//사용할 것입니다.
	@Inject
	private Resource resource;
	
	//log를 찍어보기 위함
	//상수(final station)이기 때문에 관례에 따라 대문자로 변수 선언
	private final static Logger LOG = LoggerFactory.getLogger(SampleComponent.class);
	
	//class에서 사용할 필드 선언
	//화면에서 HTL로 이 class에 접근해서 필드값을 가져가기 때문에...
	//화면으로 전달할 data를 필드로 선언해준 것!
	private String hardCode;
	private String nodeData;
	private String regParam;
	private List<String> listDatas;
	
	
	//렌더링 하기 전에 helper class와 연결이 된 component의
	//data를 가져 오기 위해 젤 처음 호출되는 메서드
	@PostConstruct
	public void activate() throws  Exception {
		
		//hard coding으로 넘길 data
		hardCode = "This is hard coding data";
		
		//text으로 된 입력 항목(node data)의 value 가져와서 넘긴다
		ValueMap valueMap = resource.getValueMap();
		nodeData = (String) valueMap.getOrDefault("text", "Not Input Data");
		
		//url(get방식)으로 넘어온 parameter 전달
		//클래스 상속 방식으로 하였을 땐 바로 접근하여 getRequest()를
		//바로 사용할 수 있었으나.. 지금은 그게 불가능하기 때문에... 의존성 주입을 해줌
		regParam = slingScriptHelper.getRequest().getParameter("param");
		
		
		//multifield로 된 입력 항목(node data)의 value를 가져와서 넘긴다. 
		//필드 초기화
		listDatas = new ArrayList<>();
		
		//content의 page의 하위노드로 있는 myList의 자식노드를 가져온다
		//client가 저장한 data를 가져온다
		Resource myList = resource.getChild("myList");
		 
		//myList의 하위 노드(multifield는 하위 노드로 data가 저장된다)가 있는 경우
		 if(myList != null && myList.hasChildren()) {
			 
			 //myList의 노드들(multifield는 데이터가 여러개일 수 있음)을
			 //하나씩 뽑아쓸 수있도록 Iterator 타입으로 가져온다.
			 Iterator<Resource> resourceIterator = myList.listChildren();
			 
			 //Iterator에서 뽑아낼 data가 있을 경우
			 while(resourceIterator.hasNext()) {
				 
				 //Iterator로 뽑아낸 데이터를 하나씩 ItemExam VO에 담아준다.
				 Resource childResource = resourceIterator.next();
				 ItemExam itemExam = childResource.adaptTo(ItemExam.class);
				
				 	//화면으로 전달할 내용은 String desc하나이면 되기 때문에
				 	//필드에 선언해두었던 listData에 desc를 하나씩 add해준다.
			 		listDatas.add(itemExam.getDesc());
				  }
		 }
		
	}
	
	
	
	//getter 선언

	public String getHardCode() {
		return hardCode;
	}

	public String getNodeData() {
		return nodeData;
	}

	public String getRegParam() {
		return regParam;
	}

	public List<String> getListDatas() {
		return listDatas;
	}



	
	
	
	
}
