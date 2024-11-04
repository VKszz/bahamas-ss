

function showDenuncia() {
    document.getElementById('denuncia').style.display = 'block';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado1').style.display = 'none';
    document.getElementById('resultado3').style.display = 'none';
    document.getElementById('calculadora').style.display = 'none';
    document.getElementById('revisao').style.display = 'none';
}

function showCalculadora() {
    document.getElementById('denuncia').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('resultado1').style.display = 'block';
    document.getElementById('resultado3').style.display = 'none';
    document.getElementById('calculadora').style.display = 'block';
    document.getElementById('revisao').style.display = 'none';
}

function showRevisao() {
    document.getElementById('denuncia').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('resultado1').style.display = 'none';
    document.getElementById('resultado3').style.display = 'block';
    document.getElementById('calculadora').style.display = 'none';
    document.getElementById('revisao').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.zoom = '90%';
});

function toggleInput(id) {
    var input = document.getElementById(id);
    input.disabled = !input.disabled;
    if (!input.disabled) {
        input.focus();
    } else {
        input.value = 0;
    }
}

function atualizar(){   
    var r = document.getElementById('resultado');
    var disstaff = document.getElementById('disstaff').value;
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var julgamento = document.getElementById('julgamento').value;
    var motivo1 = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
    var provas = document.getElementById('provas').value;
    r.innerHTML = `
    **RESOLVIDO POR**: <@${disstaff}>  </BR></BR>
    **DENUNCIANTE**: <@${disdenunciante}> // ${cidadedenunciante} </BR>
    **DENUNCIADO**: <@${disdenunciado}> // ${cidadedenunciado} </BR>
    **TICKET:** ${ticket} </BR>
    **JULGAMENTO:**: ${julgamento} </BR>
    **MOTIVO**: ${motivo1} </BR>
    **PUNIÇÃO**: ${punicao} </BR>
    **PROVAS**: ${provas} </BR>

`;
savediscord();

    }



function resultadodenuncia(){
    var r = document.getElementById('resultado');
    var disstaff = document.getElementById('disstaff').value;
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var julgamento = document.getElementById('julgamento').value;
    var motivo1 = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
    var provas = document.getElementById('provas').value;
    
   
    r.innerHTML = `
        **RESOLVIDO POR**: <@${disstaff}>  </BR></BR>
        **DENUNCIANTE**: <@${disdenunciante}> // ${cidadedenunciante} </BR>
        **DENUNCIADO**: <@${disdenunciado}> // ${cidadedenunciado} </BR>
        **TICKET:** ${ticket} </BR>
        **JULGAMENTO:**: ${julgamento} </BR>
        **MOTIVO**: ${motivo1} </BR>
        **PUNIÇÃO**: ${punicao} </BR>
        **PROVAS**: ${provas} </BR>
    `;
    copiarRelatorio2();
    
    
}



function advertenciaeban(){
    var r = document.getElementById('resultado');
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var motivo = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
   
    r.innerHTML = `
        **DENUNCIADO**: <@${disdenunciado}> // ${cidadedenunciado} </BR>
        **TICKET:** ${ticket} </BR>
        **MOTIVO**: ${motivo} </BR>
        **PUNIÇÃO**: ${punicao} </BR>
    `;
    copiarRelatorio2();
}

function pendencia(){
    var r = document.getElementById('resultado');
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var motivo = document.getElementById('motivo').value;
    var provas = document.getElementById('provas').value;
    var pendencia = document.getElementById('pendencias').value;
    var ticket = document.getElementById('ticket').value;
   
    r.innerHTML = `
        **DENUNCIANTE:** <@${disdenunciante}>  //  ${cidadedenunciante} </BR>
        **DENUNCIADO:**  <@${disdenunciado}>  // ${cidadedenunciado} </BR>
        **TICKET:** ${ticket} </BR>
        **MOTIVO:**  ${motivo} </BR>
        **ITENS:**   ${pendencia} </BR>
        **PROVAS:**  ${provas} </BR>
    `;
    copiarRelatorio2();
}
function prisao(){
    var r = document.getElementById('resultado');
    var disstaff = document.getElementById('disstaff').value;
    var disdenunciante = document.getElementById('disdenunciante').value;
    var cidadedenunciante = document.getElementById('cidadedenunciante').value;
    var disdenunciado = document.getElementById('disdenunciado').value;
    var cidadedenunciado = document.getElementById('cidadedenunciado').value;
    var ticket = document.getElementById('ticket').value;
    var julgamento = document.getElementById('julgamento').value;
    var motivo = document.getElementById('motivo').value;
    var punicao = document.getElementById('punicao').value;
    var provas = document.getElementById('provas').value;
   
    r.innerHTML = `
    **DISCORD:** <@${disdenunciado}> </BR>
    **ID:** ${cidadedenunciado} </BR>
    **TICKET:**  ${ticket} </BR>
    **PRISÃO:**  300 Meses </BR>
    **MULTA:** R$ 600.000 </BR>
    **MOTIVO:** ${motivo} </BR>
    **PROVA:** ${provas} </BR>
    `;
    copiarRelatorio2();

}

function copiarRelatorio2(){
    var r = document.getElementById('resultado');
    var range = document.createRange();
    range.selectNode(r);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{
        document.execCommand('copy');
        alert('Relatório copiado para a área de transferência');                
    } catch (err) {
        alert('Erro ao copiar o relatório.');
    }
    
    window.getSelection().removeAllRanges();
 
}

function calcularMulta() {
    const itens = [
        { checkboxId: 'roupa', inputId: 'roupaQty', valor: 10000 },
        { checkboxId: 'binoculos', inputId: 'binoculosQty', valor: 1000 },
        { checkboxId: 'repairkit', inputId: 'repairkitQty', valor: 50000 },
        { checkboxId: 'pneu', inputId: 'pneuQty', valor: 4000 },
        { checkboxId: 'celular', inputId: 'celularQty', valor: 6000 },
        { checkboxId: 'militec', inputId: 'militecQty', valor: 30000 },
        { checkboxId: 'oxigenio', inputId: 'oxigenioQty', valor: 4000 },
        { checkboxId: 'alianca', inputId: 'aliancaQty', valor: 150000 },
        { checkboxId: 'cordas', inputId: 'cordasQty', valor: 10000 },
        { checkboxId: 'paraquedas', inputId: 'paraquedasQty', valor: 24000 },
        { checkboxId: 'rosa', inputId: 'rosaQty', valor: 30000 },
        { checkboxId: 'sabonete', inputId: 'saboneteQty', valor: 80000 },
        { checkboxId: 'cigarro', inputId: 'cigarroQty', valor: 1000 },
        { checkboxId: 'isqueiro', inputId: 'isqueiroQty', valor: 20000 },
        { checkboxId: 'hkp7m10', inputId: 'hkp7m10Qty', valor: 500000 },
        { checkboxId: 'munihkp7m10', inputId: 'munihkp7m10Qty', valor: 2500 },
        { checkboxId: 'aguadecoco', inputId: 'aguadecocoQty', valor: 20000 },
        { checkboxId: 'rastreador', inputId: 'rastreadorQty', valor: 50000 },
        { checkboxId: 'cirurgia', inputId: 'cirurgiaQty', valor: 1000000 },
        { checkboxId: 'dinheirolimpo', inputId: 'dinheirolimpoQty', valor: 1 },
        { checkboxId: 'dinheirosujo', inputId: 'dinheirosujoQty', valor: 0.55 },
        { checkboxId: 'taser', inputId: 'taserQty', valor: 350000 },
        { checkboxId: 'honra', inputId: 'honraQty', valor: 1000 },
        
        
        { checkboxId: 'bronze', inputId: 'bronzeQty', valor: 700 },
        { checkboxId: 'diamante', inputId: 'diamanteQty', valor: 650 },
        { checkboxId: 'esmeralda', inputId: 'esmeraldaQty', valor: 400 },
        { checkboxId: 'topazio', inputId: 'topazioQty', valor: 350 },
        { checkboxId: 'rubi', inputId: 'rubiQty', valor: 750 },
        { checkboxId: 'safira', inputId: 'safiraQty', valor: 350 },
        { checkboxId: 'ametista', inputId: 'ametistaQty', valor: 300 },
        { checkboxId: 'ferro', inputId: 'ferroQty', valor: 300 },
        { checkboxId: 'ouro', inputId: 'ouroQty', valor: 900 },


        { checkboxId: 'tucunare', inputId: 'tucunareQty', valor: 280 },
        { checkboxId: 'dourado', inputId: 'douradoQty', valor: 350 },
        { checkboxId: 'corvina', inputId: 'corvinaQty', valor: 300 },
        { checkboxId: 'pacu', inputId: 'pacuQty', valor: 200 },
        { checkboxId: 'pintado', inputId: 'pintadoQty', valor: 280 },
        { checkboxId: 'pirarucu', inputId: 'pirarucuQty', valor: 300 },
        { checkboxId: 'tilapia', inputId: 'tilapiaQty', valor: 280 },
        { checkboxId: 'salmao', inputId: 'salmaoQty', valor: 200 },
        { checkboxId: 'lambari', inputId: 'lambariQty', valor: 200 },


        { checkboxId: 'bandagem', inputId: 'bandagemQty', valor: 40000 },
        { checkboxId: 'dorflex', inputId: 'dorflexQty', valor: 20000 },
        { checkboxId: 'camisinha', inputId: 'camisinhaQty', valor: 1000 }, 
        { checkboxId: 'primeirossocorros', inputId: 'primeirossocorrosQty', valor: 20000 },

        
        { checkboxId: 'fiveSeven', inputId: 'fiveSevenQty', valor: 296400 },
        { checkboxId: 'muniFiveSeven', inputId: 'muniFiveSevenQty', valor: 2340 },
        { checkboxId: 'glock', inputId: 'glockQty', valor: 310000 },
        { checkboxId: 'muniGlock', inputId: 'muniGlockQty', valor: 3100 },
        { checkboxId: 'ak47', inputId: 'ak47Qty', valor: 614640 },
        { checkboxId: 'muniAk47', inputId: 'muniAk47Qty', valor: 5460 },
        { checkboxId: 'mtar21', inputId: 'mtar21Qty', valor: 511680 },
        { checkboxId: 'muniMtar21', inputId: 'muniMtar21Qty', valor: 4290 },
        { checkboxId: 'thompson', inputId: 'thompsonQty', valor: 427440 },
        { checkboxId: 'muniThompson', inputId: 'muniThompsonQty', valor: 3510 },
        { checkboxId: 'm110', inputId: 'm110Qty', valor: 884520 },
        { checkboxId: 'munim110', inputId: 'munim110Qty', valor: 5590 },
        { checkboxId: 'aug', inputId: 'augQty', valor: 884520 },
        { checkboxId: 'muniAug', inputId: 'muniAugQty', valor: 5850 },
        { checkboxId: 'g36', inputId: 'g36Qty', valor: 1062360 },
        { checkboxId: 'muniG36', inputId: 'muniG36Qty', valor: 6240 },
        { checkboxId: 'pistolMachine', inputId: 'pistolMachineQty', valor: 355680 },
        { checkboxId: 'muniPistolMachine', inputId: 'muniPistolMachineQty', valor: 2730 },
        { checkboxId: 'fuzilM4A4', inputId: 'fuzilM4A4Qty', valor: 737880 },
        { checkboxId: 'munifuzilM4A4', inputId: 'munifuzilM4A4Qty', valor: 5590 },
        { checkboxId: 'M4A1', inputId: 'M4A1Qty', valor: 950000 },
        { checkboxId: 'muniM4A1', inputId: 'muniM4A1Qty', valor: 5500 },


        { checkboxId: 'microuzi', inputId: 'microuziQty', valor: 511680 },
        { checkboxId: 'munimicrouzi', inputId: 'munimicrouziQty', valor: 4290 },
        { checkboxId: 'dominascoin', inputId: 'dominascoinQty', valor: 250000 },
        { checkboxId: 'radio', inputId: 'radioQty', valor: 2000 },
        { checkboxId: 'pedecabra', inputId: 'pedecabraQty', valor: 104000 },
        { checkboxId: 'alicate', inputId: 'alicateQty', valor: 52000 },
        
        { checkboxId: 'mochilax', inputId: 'mochilaxQty', valor: 66300 },
        { checkboxId: 'colete', inputId: 'coleteQty', valor: 104000 },
        { checkboxId: 'algemas', inputId: 'algemasQty', valor: 78000 },
        { checkboxId: 'capuz', inputId: 'capuzQty', valor: 44200 },
        { checkboxId: 'lockpick', inputId: 'lockpickQty', valor: 46800 },
        { checkboxId: 'farm', inputId: 'farmQty', valor: 1500 },
        { checkboxId: 'drogas', inputId: 'drogasQty', valor: 910},
        { checkboxId: 'armaBranca', inputId: 'armaBrancaQty', valor: 250000 },     
    ];

    let total = 0;

    itens.forEach(item => {
        const checkbox = document.getElementById(item.checkboxId);
        const quantidade = parseInt(document.getElementById(item.inputId).value, 10);

        if (checkbox.checked) {
            total += quantidade * item.valor;
        }
    });

    document.getElementById('resultado1').innerText = `Total a Pagar: R$${total}`;
}

function limparDados() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const numberInputs = document.querySelectorAll('input[type="number"]');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    numberInputs.forEach(input => {
        input.value = 0;
        input.disabled = true;
    });

    document.getElementById('resultado1').innerText = 'Total a Pagar: R$0,00';
}

function copiarDados() {
    var cdenunciado = document.getElementById('cdenunciado').value;
    var cmotivo = document.getElementById('cmotivo').value;
    var itens = capturarItensSelecionados();
    var multa = document.getElementById('resultado1').innerText;

    var textoCopiar = `**DENUNCIADO:** ${cdenunciado}
**MOTIVO:** ${cmotivo}
**ITENS:** 
${itens}
**${multa}**`;

    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert('Dados copiados com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}

function capturarItensSelecionados() {
    var itensSelecionados = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function(checkbox) {
        var label = checkbox.nextElementSibling.textContent;
        var quantidade = document.getElementById(checkbox.id + 'Qty').value;
        itensSelecionados.push(`${label} x${quantidade}`);
    });

    return itensSelecionados.join('\n');
}


function start() {
    
    var remocaoo = document.getElementById("remocaoo");
    remocaoo.style.display = "none";
    disss.style.display = "none"
    
    
    loaddiscord();
}

function att() {
    var puni = document.getElementById("punicaoo");
    var remocaoo = document.getElementById("remocaoo");
    var pua = document.getElementById("pua");
    var den = document.getElementById("divdenuncia");
    var res = document.getElementById("divrevisao");
    var disss = document.getElementById("disss");
     
    
    if (document.getElementById('julgamento2').value == "APROVADO") {
        remocaoo.style.display = "none";
        disss.style.display = "none"
        pua.style.display = "block";
        den.style.display = "block";
        res.style.display = "block";
        puni.innerHTML = "REMOÇÃO";
       
    } else if (document.getElementById('julgamento2').value == "NEGADO") {
        remocaoo.style.display = "none";
        pua.style.display = "block";
        disss.style.display = "none"
        den.style.display = "block";
        res.style.display = "block";
        puni.innerHTML = "PUNIÇÃO";
    } else if (document.getElementById('julgamento2').value == "CONVERTIDA") {
        remocaoo.style.display = "block";
        den.style.display = "block";
        disss.style.display = "none"
        res.style.display = "block";
        puni.innerHTML = "PUNIÇÃO";
        
    }
    else if(document.getElementById('julgamento2').value == 'SSALERTA'){
        den.style.display = "none";
        res.style.display = "none";
        pua.style.display = "none";
        disss.style.display = "block";

    }
}

function copy() {
    var r = document.getElementById('resultado3');
    var id = document.getElementById('id').value;
    var tdenuncia = document.getElementById('tdenuncia').value;
    var trevisao = document.getElementById('trevisao').value;
    var motivo2 = document.getElementById('motivo2').value; 
    var convertido = document.getElementById('convertido').value;
    var punicao2 = document.getElementById('punicao2').value; //punicao2 pega o campo de punições do select de revisões
    
    if (document.getElementById('julgamento2').value == "CONVERTIDA") {   
        r.innerHTML = 
        `\`\`\` 🔄 REVISÃO CONVERTIDA 🔄 \`\`\`<br> ` +
        `**ID:** ${id}<br>` + 
        `**TICKET DENUNCIA:** ${tdenuncia}<br>` +
        `**TICKET REVISAO:** ${trevisao}<br>` +
        `**MOTIVO:** ${motivo2}<br>` +
        `**PUNIÇÃO:** ${punicao2}<br>` +
        `**CONVERTIDO:** ${convertido}<br>`;
        
        copiarRelatorio();  
    } else if (document.getElementById('julgamento2').value == "APROVADO") {
        r.innerHTML = 
        `\`\`\` ✅ REVISÃO ACEITA ✅ \`\`\`<br>` +
        `**ID:** ${id}<br>` + 
        `**TICKET DENUNCIA:** ${tdenuncia}<br>` +
        `**TICKET REVISAO:** ${trevisao}<br>` +
        `**MOTIVO:** ${motivo2}<br>` +
        `**PUNIÇÃO REMOVIDA:** ${punicao2}<br>`;
        
        copiarRelatorio(); 
    } else if (document.getElementById('julgamento2').value == "NEGADO") {
        r.innerHTML = 
        `\`\`\` ❌ REVISÃO NEGADA ❌ \`\`\`<br>` +
        `**ID:** ${id}<br>` + 
        `**TICKET DENUNCIA:** ${tdenuncia}<br>` +
        `**TICKET REVISAO:** ${trevisao}<br>` +
        `**MOTIVO:** ${motivo2}<br>` +
        `**PUNIÇÃO:** ${punicao2}<br>`;
        
        copiarRelatorio();        
    }
    else if (document.getElementById('julgamento2').value == "SSALERTA"){
        r.innerHTML = 
       ` **ID:**   |  <@> ` +
       ` **MOTIVO:** ` +
       ` **RESULTADO:** **Liberado +** <@&1279616097557024931> `;
      
    }
}

function atualizar2() {

    var r = document.getElementById('resultado3');


    var julgamento = document.getElementById('julgamento2').value;
    var id = document.getElementById('id').value;
    var tdenuncia = document.getElementById('tdenuncia').value;
    var trevisao = document.getElementById('trevisao').value;
    var motivo2 = document.getElementById('motivo2').value;
    var punicao = document.getElementById('punicao2').value;
    var convertido = document.getElementById('convertido').value;
    var disss = document.getElementById('disss4').value;
    var motivo = document.getElementById('motivo2').value;


    var resultado = `
    **JULGAMENTO:** ${julgamento} </BR>
    **ID:** ${id} </BR>
    **TICKET DE DENÚNCIA:** ${tdenuncia} </BR>
    **TICKET DE REVISÃO:** ${trevisao} </BR>
    **MOTIVO:** ${motivo2} </BR>
    **PUNIÇÃO ATUAL:** ${punicao} </BR>`;


    if (julgamento === "CONVERTIDA") {
        resultado += `**CONVERTIDO PARA:** ${convertido} </BR>`;
    }
    else if(julgamento === "SSALERTA"){
        resultado = ` **ID: ${id}   |  <@${disss}>** </BR> ` +
       ` **MOTIVO: ${motivo}** </BR>` +
       ` **RESULTADO:** **Liberado +** <@&1279616097557024931> `;
        
       
    }

    r.innerHTML = resultado;
}


document.getElementById('revisao').addEventListener('input', atualizar2);



function copiarRelatorio() {
    var r = document.getElementById('resultado3');
    var range = document.createRange();
    range.selectNode(r);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Relatório copiado para a área de transferência');                
    } catch (err) {
        alert('Erro ao copiar o relatório.');
    }
    
    window.getSelection().removeAllRanges();
}

function ld() {
     window.document.getElementById('disdenunciante').value = "";
     window.document.getElementById('cidadedenunciante').value = "";
     window.document.getElementById('disdenunciado').value = "";
     window.document.getElementById('cidadedenunciado').value = "";
     window.document.getElementById('ticket').value = "";
     window.document.getElementById('motivo').value = "";
     window.document.getElementById('provas').value = "";
     window.document.getElementById('pendencias').value = ""

     var r = document.getElementById('resultado');
     
    r.innerHTML =` **RESOLVIDO POR**: <@>  </BR></BR>
     **DENUNCIANTE**: <@> //  </BR>
     **DENUNCIADO**: <@> //  </BR>
     **TICKET:**  </BR>
     **JULGAMENTO:**:  </BR>
     **MOTIVO**:  </BR>
     **PUNIÇÃO**:  </BR>
     **PROVAS**:  </BR>`
    
}

function lr() {
    window.document.getElementById('id').value = "";
    window.document.getElementById('tdenuncia').value = "";
    window.document.getElementById('trevisao').value = "";
    window.document.getElementById('motivo2').value = "";

    var pp = document.getElementById('resultado3');    
   pp.innerHTML =` **JULGAMENTO:** APROVADO </BR>
    **ID:** </BR>
    **TICKET DE DENÚNCIA:** </BR>
    **TICKET DE REVISÃO:** </BR>
    **MOTIVO:** </BR>
    **PUNIÇÃO ATUAL:** 300 Meses de prisão & 600K de multa </BR>` 
   
}

function loaddiscord()
{
    
    var save2 = localStorage.getItem("savedc");
    console.log(`${save2}`)
    window.document.getElementById('disstaff').value = `${save2}`
    
}

function savediscord(){
    var save = document.getElementById('disstaff').value
    localStorage.setItem("savedc", `${save}`)
}


function SS(){
    var id = window.document.getElementById('id').value;
    var diss = window.document.getElementById('disss4').value;
    var motivo = window.document.getElementById('motivo2').value;
    var resultado = window.document.getElementById('resultado3')

    resultado.innerHTML = 
       ` **ID: ${id} | <@${diss}>** </BR>` +
       ` **MOTIVO: ${motivo}**</BR>` +
       ` **RESULTADO:** **Liberado +** <@&1279616097557024931> `;
       copiarRelatorio();

}