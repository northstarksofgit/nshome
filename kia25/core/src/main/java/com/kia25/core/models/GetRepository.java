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
			/** setting part **/
			final String SOURCE_SERVER = "http://localhost:4502";
			final String SOURCE_USERNAME = "admin";
			final String SOURCE_PASSWORD = "admin";

			Repository repository = JcrUtils.getRepository(SOURCE_SERVER + "/crx/server");

			Session session = repository.login(new SimpleCredentials(SOURCE_USERNAME, SOURCE_PASSWORD.toCharArray()));
			
			/** app part **/
			Node root = session.getRootNode();
			Node root_dir = root.getNode("apps");
			Node flexible_dir = root_dir.getNode("kia25/components/buildyourcar");

			/** while 1 **/
			NodeIterator nextNode = flexible_dir.getNodes();
			while (nextNode.hasNext()) {
				Node next_Node = (Node) nextNode.next();
				System.out.println("Node line --- " + next_Node.getPath());
				
				NodeIterator next_Node2 = next_Node.getNodes();
				while (next_Node2.hasNext()){
					Node child_Node = (Node) next_Node2.nextNode();
					System.out.println("Node line in --- " + child_Node.getPath());
				}
			}
			
			/** while 2 **/
			Node n = (Node) flexible_dir;
            NodeIterator it = n.getNodes();
            while (it.hasNext()) {
                Node node = it.nextNode();
                System.out.println("Node line 2 --- " + node.getPath());
                log.info("----"+ node.getPath() );
            }
			

			// partial getNode
			Node partialNode3 = flexible_dir.getNode("build-003");
			System.out.println("get title --- " + partialNode3.getProperty("jcr:title").getString());
			System.out.println("get pathTap --- " + root_dir.getNode("kia25/components/buildyourcar/build-003/cq:dialog/content/items/pathTap").getProperty("jcr:title").getString());

			session.save();
			session.logout();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

//System.out.println(repository.getDescriptor(Repository.SPEC_VERSION_DESC));
//System.out.println(repository.getDescriptor(Repository.REP_VERSION_DESC));
//System.out.println(repository.getDescriptor(Repository.REP_NAME_DESC));
//System.out.println(repository.getDescriptor(Repository.OPTION_TRANSACTIONS_SUPPORTED));

// Written setProperty
//Node adobe = root.addNode("adobe");
//Node day = adobe.addNode("day");
//day.setProperty("message", "Adobe CQ is part of the Adobe Digital Marketing Suite!");