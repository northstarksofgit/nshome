package com.kia25.core.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.jcr.AccessDeniedException;
import javax.jcr.InvalidItemStateException;
import javax.jcr.ItemExistsException;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.ReferentialIntegrityException;
import javax.jcr.Repository;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.SimpleCredentials;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.nodetype.NoSuchNodeTypeException;
import javax.jcr.version.VersionException;

import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.log4j.Logger;
public class GetRepositorySearch extends GetRepository_static {
	private static Logger LOG = Logger.getLogger(GetRepositorySearch.class);

	public static void main(String[] args) throws AccessDeniedException, ItemExistsException,
			ReferentialIntegrityException, ConstraintViolationException, InvalidItemStateException, VersionException,
			LockException, NoSuchNodeTypeException, RepositoryException {
		Node parentNode;
		Session session = null;
		long jobStartTime = System.currentTimeMillis();
		basefolderNodeLst = new ArrayList<Node>();
		try {
			System.out.println("######   CONNECTING AEM SERVER    ######");
			Repository repository = JcrUtils.getRepository(SERVER_URL);
			session = repository.login(new SimpleCredentials(LOGIN_USRNAME, LOGIN_PASWRD.toCharArray()), WORKSPACE);
			System.out.println("###### AEM CONNECTION SUCCESSFULL ######");
			System.out.println("###### USER_ID connected : " + session.getUserID());
			System.out.println("###### SESSION.GETREPOSITORY():" + session.getRepository());

			parentNode = session.getNode(NODE_PATH);
			if (parentNode.hasNodes()) {
				System.out.println("###### TRAVERSING PATH : " + NODE_PATH);
				System.out.println("** Parent Node is: " + parentNode.getName() + "--- it has child nodes ***");
			}
			basefolderNodeLst.add(parentNode);

			System.out.println("###### JOB STARTED ON :" + dtformater.format(LocalDateTime.now()));

			getNodeHierarchyData(basefolderNodeLst, session);

			basefolderNodeLst = null;
			System.out.println("###### Total CAPACITY SIZE in KB  ###### : " + TOTAL_FILE_SIZE);
			System.out.println("###### Total CAPACITY SIZE in MB  ###### : " + (TOTAL_FILE_SIZE / 1024));
			TOTAL_FILE_SIZE = 0;

		} catch (Exception exc) {
			System.out.println("Exception while connecting AEMLogin :" + exc.getMessage());
		}
		long jobEndTime = System.currentTimeMillis();
		System.out.println("###### JOB ENDED AT :" + dtformater.format(LocalDateTime.now()));
		System.out
				.println("###### TOTAL TIME TAKEN FOR EXECUTION : " + (jobEndTime - jobStartTime) / 1000 + " SECONDS");
		System.out.println("########################## FINISH #############################");
	}

	public static void getNodeHierarchyData(List<Node> folderNdList, Session session) throws RepositoryException {
		String nodeType = null;
		NodeIterator nodeItr = null;

		List<Node> currfolderNdsList = new ArrayList<Node>();
		try {
			for (int j = 0; j < folderNdList.size(); j++) {
				Node currentNode = folderNdList.get(j);
				nodeItr = currentNode.getNodes();
				while (nodeItr.hasNext()) {
					Node sbNode = nodeItr.nextNode();
					nodeType = sbNode.getProperty(JCR_PRIMARYTYPE).getString();

					System.out.println("Current NodePath :" + sbNode.getPath());

					if (nodeType.equalsIgnoreCase(IS_COMPNT)) {
						System.out.println(sbNode.getName() + " ---> is a COMPONENT");
						String dialogStr = sbNode.getPath() + IS_DIALOG;
						Node contentNode = session.getNode(dialogStr);

						if (contentNode.hasProperty(JCR_TITILE)) {
							String titleStr = contentNode.getProperty(JCR_TITILE).getString();
							System.out.println(titleStr + " ---> is a DIALOG TITLE");
						}

						currfolderNdsList.add(sbNode);
					}

					if (nodeType.equalsIgnoreCase(IS_FOLDER)) {
						System.out.println(sbNode.getName() + " ---> is a FOLDER");
						currfolderNdsList.add(sbNode);
					}

					if (nodeType.equalsIgnoreCase(IS_ASSET)) {
						System.out.println(sbNode.getName() + " ---> is an ASSET");
						String assetStr = sbNode.getPath() + "/" + JCR_CONTENT_SLASH + "/" + ASSET_METADATA;
						Node assetNode = session.getNode(assetStr);
						if (assetNode.hasProperty(DAM_ASSET_SIZE)) {
							long damAssetSize = assetNode.getProperty(DAM_ASSET_SIZE).getLong();
							float fileSize = damAssetSize / 1024;
							TOTAL_FILE_SIZE = TOTAL_FILE_SIZE + fileSize;
							System.out.println("DAM_ASSET_SIZE :" + fileSize + " KB");
						}

					}
				}
				System.out.println("*** TRAVERSING OF NODE **** : " + currentNode.getName() + " ***COMPLETE***");
				System.out.println("=================================================================================");
			}
			/**
			 * if current folder has folders then traverse those, else stop job.
			 */
			if (currfolderNdsList.size() > 0) {
				getNodeHierarchyData(currfolderNdsList, session);
			} else {
				return;
			}
		} catch (Exception exe) {
			System.out.println("*** Exception while processing the node ***" + exe.getMessage());
		}
		
	}

}

//if(assetNode.hasProperty(JCR_LASTMODIFIEDDATE)){ String jcrCreatedDate =
//assetNode.getProperty(JCR_LASTMODIFIEDDATE).getString();
//System.out.println("JCRLastModifiedDate :"+jcrCreatedDate); }
//if(!assetNode.hasProperty(JCR_LASTMODIFIEDDATE)){
//System.out.println("NO JCRLastModifiedDate for the Asset:"); }
//
//
//
//if(assetNode.hasNode(assetStr) && assetNode.hasProperty(REPLICATION_STATUS)){
//String replicationStatus =
//assetNode.getProperty(REPLICATION_STATUS).getString();
//System.out.println("ReplicationStatus :"+replicationStatus);
//if(replicationStatus!=null &&
//replicationStatus.equalsIgnoreCase(ACTIVE_NODE)){ ACT_COUNT = ACT_COUNT+1; }
//if(replicationStatus!=null &&
//replicationStatus.equalsIgnoreCase(DEACTIVE_NODE)){ DEACT_COUNT =
//DEACT_COUNT+1; } }
