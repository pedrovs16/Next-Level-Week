function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json() )
    .then (states => { 
        for( state of states){
            ufSelect.innerHTML +=  '<option value="'+ state.id +'">' + state.nome + '</option>'
        }
       
    } )
}
populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value
    



    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ ufValue +'/municipios?orderBy=nome'

    citySelect.innerHTML = " <option value>Selecione a Cidade</option> " 
    citySelect.disabled = true
    fetch( url )
    .then( res => res.json() )
    .then (cities => { 
        for( city of cities){
            citySelect.innerHTML +=  '<option value="'+ city.nome +'">' + city.nome + '</option>'
        }

        citySelect.disabled = false


       
    } )
    
}


document
   .querySelector("select[name=uf]")
   .addEventListener("change", getCities)

//ORDENAR AS LISTAS
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
};



// ITENS DE COLETA
// const para pegar os ids
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}
const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem(event){   
   const itemLi = event.target

   
   itemLi.classList.toggle('selected')
   
    const itemId = itemLi.dataset.id

    //verificar se o item esta em selectedItems
    const alredySelected = selectedItems.findIndex( function(item){
        const itemFound = item == itemId
        return itemFound
    })
   // se sim retirar se nao colocar
    if(alredySelected >= 0){
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferente = item != itemId
            return itemIsDifferente
        })
        selectedItems = filteredItems
    }
    else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}
//atualizar a info


