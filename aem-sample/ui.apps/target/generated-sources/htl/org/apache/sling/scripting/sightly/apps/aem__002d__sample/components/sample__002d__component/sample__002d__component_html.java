/*******************************************************************************
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 ******************************************************************************/
package org.apache.sling.scripting.sightly.apps.aem__002d__sample.components.sample__002d__component;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class sample__002d__component_html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

Object _global_data = null;
Object _global_clientlibs = null;
Object _dynamic_properties = bindings.get("properties");
Collection var_collectionvar6_list_coerced$ = null;
out.write("\n");
_global_data = renderContext.call("use", com.nsc.aem_sample.core.models.SampleComponent.class.getName(), obj());
out.write("\n\n<!-- \uBA85\uB839\uC5B4.\uC54C\uB9AC\uC544\uC2A4 \n\t \uD574\uB2F9 \uC54C\uB9AC\uC544\uC2A4\uB85C class\uC758 data\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.\n-->\n\n \n\n<!-- \uC774 \uD15C\uD50C\uB9B0\uC740 \uACE0\uC815 -->\n");
_global_clientlibs = renderContext.call("use", "/libs/granite/sightly/templates/clientlib.html", obj());
out.write("\n\n\n<!-- \n\t\uC54C\uB9AC\uC544\uC2A4.~~~ => all/js/css \uC911\uC5D0 \uC120\uD0DD\n\tall: css\uC640 js \uBAA8\uB450 clientlibs \uAC83\uC744 \uAC00\uC838\uC634\n\tcss:css\uB9CC clientlibs \uAC83\uC744 \uAC00\uC838\uC634\n\tjs: js\uB9CC clientlibs \uAC83\uC744 \uAC00\uC838\uC634-->\n<!-- \uC704\uC758 \uD15C\uD50C\uB9BF\uC5D0 \uB9E4\uAC1C\uBCC0\uC218\uB85C clientlibs\uC758 categories properties\uC758 value\uB97C \uB118\uACA8\uC900\uB2E4 -->\n");
{
    Object var_templatevar0 = renderContext.getObjectModel().resolveProperty(_global_clientlibs, "all");
    {
        String var_templateoptions1_field$_categories = "practice,clientlibs,sample";
        {
            java.util.Map var_templateoptions1 = obj().with("categories", var_templateoptions1_field$_categories);
            callUnit(out, renderContext, var_templatevar0, var_templateoptions1);
        }
    }
}
out.write("\n\n<p class=\"test\" onclick=\"test()\">this is sample component</p>\n<br/><br/>\n<!-- \uC54C\uB9AC\uC544\uC2A4 \uB4A4\uC5D0 \uC628 property\uB294 class \uB0B4\uC758 \uD544\uB4DC \uC774\uB984\uC774\uB2E4.\n\tjstl\uC744 \uC774\uC6A9\uD574\uC11C \uAC1D\uCCB4\uC5D0 \uC811\uADFC\uD558\uB294 \uAC83\uACFC \uB3D9\uC77C\uD55C \uBC29\uC2DD\uC774\uB77C\uACE0 \uC774\uD574\uD558\uBA74 \uB41C\uB2E4.\n\n -->\n<p>");
{
    String var_2 = ("properties.text : " + renderContext.getObjectModel().toString(renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_dynamic_properties, "text"), "text")));
    out.write(renderContext.getObjectModel().toString(var_2));
}
out.write("</p>\n\n<p>");
{
    String var_3 = ("Helper Class Request Parameter Value : " + renderContext.getObjectModel().toString(renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_global_data, "regParam"), "text")));
    out.write(renderContext.getObjectModel().toString(var_3));
}
out.write("</p>\n<p>");
{
    String var_4 = ("Helper Class Request nodeData Value : " + renderContext.getObjectModel().toString(renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_global_data, "nodeData"), "text")));
    out.write(renderContext.getObjectModel().toString(var_4));
}
out.write("</p>\n<p>");
{
    String var_5 = ("Helper Class HardCode Value : " + renderContext.getObjectModel().toString(renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_global_data, "hardCode"), "text")));
    out.write(renderContext.getObjectModel().toString(var_5));
}
out.write("</p>\n\n<p>Helper Class list Property Value: </p>\n");
{
    Object var_collectionvar6 = renderContext.getObjectModel().resolveProperty(_global_data, "listDatas");
    {
        long var_size7 = ((var_collectionvar6_list_coerced$ == null ? (var_collectionvar6_list_coerced$ = renderContext.getObjectModel().toCollection(var_collectionvar6)) : var_collectionvar6_list_coerced$).size());
        {
            boolean var_notempty8 = (var_size7 > 0);
            if (var_notempty8) {
                {
                    long var_end11 = var_size7;
                    {
                        boolean var_validstartstepend12 = (((0 < var_size7) && true) && (var_end11 > 0));
                        if (var_validstartstepend12) {
                            out.write("<ul>");
                            if (var_collectionvar6_list_coerced$ == null) {
                                var_collectionvar6_list_coerced$ = renderContext.getObjectModel().toCollection(var_collectionvar6);
                            }
                            long var_index13 = 0;
                            for (Object item : var_collectionvar6_list_coerced$) {
                                {
                                    boolean var_traversal15 = (((var_index13 >= 0) && (var_index13 <= var_end11)) && true);
                                    if (var_traversal15) {
                                        out.write("\n<!-- \talias\uB97C \uC8FC\uC9C0 \uC54A\uC73C\uBA74 \uAE30\uBCF8\uC774 item -->\n\t<li>");
                                        {
                                            Object var_16 = renderContext.call("xss", item, "text");
                                            out.write(renderContext.getObjectModel().toString(var_16));
                                        }
                                        out.write("</li>\n");
                                    }
                                }
                                var_index13++;
                            }
                            out.write("</ul>");
                        }
                    }
                }
            }
        }
    }
    var_collectionvar6_list_coerced$ = null;
}
out.write("\n\n\n");
{
    String var_17 = (("<!-- <sly data-sly-resource=\"" + renderContext.getObjectModel().toString(renderContext.call("xss", "./title", "comment"))) + "\"></sly> -->");
    out.write(renderContext.getObjectModel().toString(var_17));
}
out.write("\n\n\n\n");


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

