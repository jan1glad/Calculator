let operatory = ['+','-','*','/'];
let operatoryAll = ['**','%','&&','||','&', '|','^','==','===','>','<'];

function startKalkulator(){
    document.getElementById("JG_kalkulator").style.display = 'initial';
    document.getElementById("JG_operatory").style.display = 'none';
    document.getElementById("JG_memory").style.display = 'none';
    obecneOperators();
    wszystkieOperatory();
   }
   function doOperatorow(){
    document.getElementById("JG_kalkulator").style.display = 'none';
    document.getElementById("JG_operatory").style.display = 'initial';
    document.getElementById("JG_memory").style.display = 'none';
    let selekt = document.getElementById('JG_selectOperator');
    let spanSelektZmiana = document.getElementById('JG_usunSelect');
    spanSelektZmiana.appendChild(selekt);
   }
   function doKalkulatora(){
    document.getElementById('JG_kalkulator').style.display = 'initial';
    document.getElementById('JG_operatory').style.display = 'none';
    document.getElementById('JG_memory').style.display = 'none';
    let selekt = document.getElementById('JG_selectOperator');
    let spanSelektKalkulator = document.getElementById('JG_kalkulatorSelect');
    spanSelektKalkulator.appendChild(selekt);
   }
   function doHistorii(){
    document.getElementById('JG_kalkulator').style.display = 'none';
    document.getElementById('JG_operatory').style.display = 'none';
    document.getElementById('JG_memory').style.display = 'initial';
   }
   function oblicz(){
    let liczba1 = document.getElementById('JG_liczba1').value;
    let liczba2 = document.getElementById('JG_liczba2').value;
    let operator = document.getElementById('JG_selectOperator').value;
    let wynik = liczba1+operator+liczba2;
    wynik = eval(wynik);
    if (wynik){
    document.getElementById('JG_wynik').value = wynik;
    document.getElementById('JG_error').innerHTML = '';
    wstawWiersz(liczba1, operator, liczba2, wynik);
    }else{
    document.getElementById('JG_error').innerHTML = 'złe dane lub zły operator';
    document.getElementById('JG_wynik').value = '';
    }
   }
   
   function obecneOperators(){
    let selectWorkingOperators = document.getElementById('JG_selectOperator');
    for (let operator of operatory){
    let option = document.createElement('option');
    option.value = operator;
    option.innerHTML = operator;
    selectWorkingOperators.appendChild(option);
    }
}

function wszystkieOperatory(){
    let selectAddOperator = document.getElementById('JG_selectAddOperator');
    for (let operator of operatoryAll){
    let option = document.createElement('option');
    option.value = operator;
     option.innerHTML = operator;
    selectAddOperator.appendChild(option);
 }
}

function dodajOperator(){
    let selectWorkingOperators = document.getElementById('JG_selectOperator');
    let selectAddOperator = document.getElementById('JG_selectAddOperator');
    let option = selectAddOperator.options[selectAddOperator.selectedIndex];
    selectWorkingOperators.appendChild(option);
   }
   function usunOperator(){
    let selectWorkingOperators = document.getElementById('JG_selectOperator');
    let selectAddOperator = document.getElementById('JG_selectAddOperator');
    let option = selectWorkingOperators.options[selectWorkingOperators.selectedIndex];
    selectAddOperator.appendChild(option);
   }

   function wstawWiersz(n1,op,n2,result){
    let N1 = document.createElement('td');
    N1.innerHTML = n1;
    let OP = document.createElement('td');
    OP.innerHTML = op;
    let N2 = document.createElement('td');
    N2.innerHTML = n2;
    let equal = document.createElement('td');
    equal.innerHTML = '=';
    let RES = document.createElement('td');
    RES.innerHTML = result;
    let DELETE = document.createElement('td');
    DELETE.innerHTML = 'delete';
    let wiersz = document.createElement('tr');
    wiersz.appendChild(N1);
    wiersz.appendChild(OP);
    wiersz.appendChild(N2);
    wiersz.appendChild(equal);
    wiersz.appendChild(RES);
    wiersz.appendChild(DELETE);
    let tablica = document.getElementById('JG_memoryObliczenia');
    tablica.appendChild(wiersz);
    DELETE.onclick = function(){this.parentElement.remove()};
}
