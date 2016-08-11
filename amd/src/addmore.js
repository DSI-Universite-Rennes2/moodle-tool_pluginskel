define(['jquery'], function($) {

    return {
        addMore: function(templatevars) {

            $("[name*='addmore_']").on('click', function() {
                var variableName = $(this).prop('name').replace('addmore_', '');
                var variableCount = +$("[name='"+variableName+"count']").val();
                var templateVariable;

                for (var i in templatevars) {
                    if (templatevars[i].name == variableName) {
                        templateVariable = templatevars[i];
                        break;
                    }
                }

                var newElements = '<br/>';
                for (i in templateVariable.values) {
                    var variable = templateVariable.values[i];
                    var elementName = variableName+'['+variableCount+']['+variable.name+']';
                    var elementId = 'id_'+variableName+'_'+variableCount+'_'+variable.name;

                    var prevIndex = variableCount-1;
                    var prevElementName = variableName+'['+prevIndex+']['+variable.name+']';
                    var prevElementId = 'id_'+variableName+'_'+prevIndex+'_'+variable.name;
                    var prevElementClasses = $('#fitem_'+prevElementId).attr('class');

                    var prevElementHtml = $('#fitem_'+prevElementId).html();
                    prevElementHtml = prevElementHtml.replace(prevElementId, elementId);
                    prevElementHtml = prevElementHtml.replace(prevElementName, elementName);

                    newElements += '<div id="fitem_'+elementId+'" class="'+prevElementClasses+'">';
                    newElements += prevElementHtml;
                    newElements += '</div>';
                }
                $('#fitem_id_addmore_'+variableName).before(newElements);

                $("[name='"+variableName+"count']").val(variableCount + 1);
            });
        }
    };
});
