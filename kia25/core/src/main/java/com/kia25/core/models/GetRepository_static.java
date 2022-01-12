package com.kia25.core.models;

import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.jcr.Node;

import org.apache.felix.scr.annotations.Reference;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;

public class GetRepository_static {
	/**
	 * AEM SERVER DETAILS
	 */
	public static final String WORKSPACE = "crx.default";
	public static final String LOGIN_USRNAME = "admin";
	public static final String LOGIN_PASWRD = "admin";
	public static final String SERVER_URL = "http://localhost:4502/crx/server";
	/**
	 * Real Directory 
	 */
	public static final String NODE_PATH = "/apps/kia25/components/buildyourcar";
	/**
	 * NODE PROPERTIES
	 */
	public static final String IS_FOLDER = "sling:OrderedFolder";
	public static final String IS_COMPNT = "cq:Component";
	public static final String IS_UNSTRUC = "nt:unstructured";
	public static final String IS_ASSET = "dam:Asset";
	public static final String IS_DIALOG = "/cq:dialog";
	public static final String REPLICATION_STATUS = "cq:lastReplicationAction";
	
	/** 자식 프로퍼티로 이동할때에 "/" 사용  **/
	public static final String JCR_ALL = "jcr:*";
	public static final String JCR_TITILE = "jcr:title";
	public static final String JCR_PRIMARYTYPE = "jcr:primaryType";	
	public static final String JCR_LASTMODIFIEDDATE = "jcr:lastModified";
	public static final String JCR_CONTENT_SLASH = "jcr:content";
	public static final String DAM_ASSET_SIZE = "dam:size";
	
	public static final String ASSET_METADATA = "metadata";
	public static final String ACTIVE_NODE = "Activate";
	public static final String DEACTIVE_NODE = "Deactivate";
	public static final String CONTENT_NODE = "content";
	public static final String ITEM_NODE = "items";
	
	/**
	 * JOB START & END TIME Setting
	 */
	public static DateTimeFormatter dtformater = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
	public static int ACT_COUNT = 0;
	public static int DEACT_COUNT = 0;
	public static List<Node> basefolderNodeLst = null;
	public static float TOTAL_FILE_SIZE = 0;

	@Reference
	public static ResourceResolverFactory resourceResolverFactory;
	public static ResourceResolver resResolver = null;

}

// static 정리 

