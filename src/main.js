const cards = document.querySelectorAll('.card'); //�������� ��� �������� � ������� card �� �������� 
for (let card of cards){
    card.addEventListener("click", ()=>{
        card.classList.toggle("card-show");
    });
}

