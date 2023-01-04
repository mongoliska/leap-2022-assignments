const submitButton = document.querySelector('#formSubmit');

const imageUrlTarget = document.querySelector('#imageUrl');
const modelTarget = document.querySelector('#model');
const brandTarget = document.querySelector('#brand');
const priceTarget = document.querySelector('#price');

const modal = new bootstrap.Modal(document.getElementById('modal'));


const getCars = async () => {
    const res = await fetch('http://localhost:3333/api/cars');
    const data = await res.json();
    console.log(data)
    return data;
};

const currencyFormatter = (value) => {
    return new Intl.NumberFormat('mn-MN', {maximumFractionDigits:3}).format(value);
};

const getCarCard = (car) => {
    return `
    <div class="col-3">
                <div class="card" data-bs-toggle="modal" data-bs-target="#>
                    <div class="ratio-4x3">
                        <img src="${car.imageUrl}" class="card-img-top"
                        alt="">
                    </div>
                    <div class="card-body">
                        <p class="card-name">${car.model}</p>
                        <p class="card-category">${car.brand}</p>
                        <p class="card-card card-price">${currencyFormatter(car.price)}</p>
            <div class="d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-success" onclick="editCar(${car.id})">Засах</button>
                <button type="button" class="btn btn-danger" onclick="deleteCar(${car.id})">Устгах</button>
            </div>
                    </div>
                </div>
            </div>`;
};

const carsTarget = document.querySelector('#cars');

const getCarsHtml = async () => {
    carsTarget.innerHTML = '';
    const cars = await getCars();
    for (const car of cars){
        carsTarget.innerHTML += getCarCard(car);
    }
};

getCarsHtml();


submitButton.addEventListener('click', async ()=>{
    const newCar={
        imageUrl:imageUrlTarget.value,
        model:modelTarget.value,
        brand:brandTarget.value,
        price:priceTarget.value,
    };

    const req = await fetch('http://localhost:3333/api/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body:JSON.stringify(newCar),
    });
    const res = await req.json();
    console.log(res);
    getCarsHtml();
});


//delete the function

const deleteCar = async (id) => {
    const req = await fetch('http://localhost:3333/api/cars', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })
    .then((res) => res.json())
    .finally((data) => {
        alert('amjilttai');
        getCarsHtml();
    });
};


const getCar = async (id) => {
    const res = await fetch('http://localhost:3333/api/cars' + id);
    const data = await res.json();
    return data;
};

const updateCar = () => {
    const updatedCar = {
    };
    fetch('http://localhost:3333/api/cars', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
    });
};

//edit 

// const editCar = async (id) => {
//     const req = await fetch('http://localhost:3333/api/cars', {
//         method: 'EDIT',
//         headers: {
//             'Content-type': 'application/json',
//         },
// };
        
