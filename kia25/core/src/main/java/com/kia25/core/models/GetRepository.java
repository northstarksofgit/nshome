package com.kia25.core.models;

import javax.jcr.Repository;
import javax.jcr.Session;
import javax.jcr.SimpleCredentials;
import org.apache.jackrabbit.commons.JcrUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;

public class GetRepository {

	private static final Logger log = LoggerFactory.getLogger(GetRepository.class);

	public static void main(String[] args) throws Exception {

		try {
			final String SOURCE_SERVER = "http://localhost:4502";
			final String SOURCE_USERNAME = "admin";
			final String SOURCE_PASSWORD = "admin";

			Repository repository = JcrUtils.getRepository(SOURCE_SERVER + "/crx/server");
			// Repository repository =
			// JcrUtils.getRepository("http://localhost:4502/crx/server/");

			// Create a Session
			Session session = repository.login(new SimpleCredentials(SOURCE_USERNAME, SOURCE_PASSWORD.toCharArray()));

			// Create a node that represents the root node and attribute
			Node root = session.getRootNode();
//			System.out.println(repository.getDescriptor(Repository.SPEC_VERSION_DESC));
//			System.out.println(repository.getDescriptor(Repository.REP_VERSION_DESC));
//			System.out.println(repository.getDescriptor(Repository.REP_NAME_DESC));
//			System.out.println(repository.getDescriptor(Repository.OPTION_TRANSACTIONS_SUPPORTED)); jcr:title

			Node content = root.getNode("apps"); // 1차 목록
			Node subContent = content.getNode("kia25/components/buildyourcar"); // 1차 이외의 불러올 목록

			// all nodes while List
			NodeIterator childNodeIterator = subContent.getNodes();

			while (childNodeIterator.hasNext()) {
				Node childNode = (Node) childNodeIterator.next();
				System.out.println("Node line --- " + childNode.getPath());
			}

			// partial getNode
			Node partialNode = subContent.getNode("build-003");
			String title = partialNode.getProperty("jcr:title").getString();

			System.out.println("get jcr:title --- " + partialNode.getProperty("jcr:title").getString());

			// get node content
			System.out.println("get jcr:title2 --- " + content.getNode("kia25/components/buildyourcar")
					.getNode("build-003").getProperty("jcr:title").getString());
			
			System.out.println("get jcr:title3 --- " + content.getNode("kia25/components/buildyourcar").getNode("build-003").getNode("cq:dialog")
							.getNode("content").getNode("items").getNode("tab1").getProperty("jcr:title").getString());

			// Written setProperty
//			  Node adobe = root.addNode("adobe");
//			  Node day = adobe.addNode("day");
//			  day.setProperty("message", "Adobe CQ is part of the Adobe Digital Marketing Suite!");

			session.save();
			session.logout();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}