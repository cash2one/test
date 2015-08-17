<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="/fis" prefix="fis"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%/* 这里是注释 */%>

<fis:extends name="common:page/layout/base.jsp">
    
    <fis:block name="block_body">
        this is block body content
    </fis:block>

    <fis:block name="block_body_js">

    </fis:block>

    <fis:script>
        require(["demo:widget/ui/test/test.js"], function(app){
            app.say();
        });
    </fis:script>

    <fis:require name="./test.jsp" />

</fis:extends>

