const inputDiv = document.querySelector(".inputDiv");
const input = document.getElementById("input");
const button = document.getElementById("button");
const contentDiv = document.querySelector(".contentDiv");


let calculate = 0;
button.addEventListener('click' , go);

input.addEventListener('keyup' , function(e){
    if(e.keyCode == 13){
        go();
    }
})

function go(){
    if(input.value != ""){
        calculate++;
        var paragraf = document.createElement('p');
        paragraf.classList.add('paragraf');
        var deleteButton = document.createElement('div');
        var finishButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        finishButton.classList.add('finishButton');
        deleteButton.innerText = "Sil";
        finishButton.innerText = "Edildi";
        paragraf.innerText = calculate + ")" + input.value;
        contentDiv.appendChild(paragraf);
        paragraf.appendChild(deleteButton);
        paragraf.appendChild(finishButton);
        input.value = "";

        deleteButton.addEventListener('click' , function(){
            calculate--;
            Swal.fire({
                title: 'Silmək istədiyinizə əminsiniz?',
                text: "Əgər silsəniz geri qaytara bilməyəcəksiniz.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sil!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Silindi'
                  )
                  contentDiv.removeChild(paragraf);

                }
              })

            
        });

        finishButton.addEventListener('click', function(){
            paragraf.classList.toggle('toggle');
        } );
    }

}

