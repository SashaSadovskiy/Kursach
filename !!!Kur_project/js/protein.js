document.addEventListener('DOMContentLoaded', function () {
    fetch('../xml/infoBlock.xml')
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'text/xml'))
        .then(xml => {
            function createInfoHTML(info) {
                return `
                    <div class="imgTov"><img src="../image/${info.querySelector('pict').textContent}" alt=""></div>
                    <div class="OpisTov">
                        <h3>${info.querySelector('name').textContent}</h3>
                        <p>
                            ${info.querySelector('text').textContent}
                        </p>
                    </div>
                    <div class="StoimTov">
                        <p>${info.querySelector('cost').textContent}</p>
                    </div>
                    `
            }

            const tov1 = xml.querySelector("infoBlock[id='protein-tov1']")
            document.getElementById('info1').innerHTML = `${createInfoHTML(tov1)}`

            const tov2 = xml.querySelector("infoBlock[id='protein-tov2']")
            document.getElementById('info2').innerHTML = `${createInfoHTML(tov2)}`

            const tov3 = xml.querySelector("infoBlock[id='protein-tov3']")
            document.getElementById('info3').innerHTML = `${createInfoHTML(tov3)}`

            const tov4 = xml.querySelector("infoBlock[id='protein-tov4']")
            document.getElementById('info4').innerHTML = `${createInfoHTML(tov4)}`

            const tov5 = xml.querySelector("infoBlock[id='protein-tov5']")
            document.getElementById('info5').innerHTML = `${createInfoHTML(tov5)}`

        })
        .catch(error => {
            console.error('Ошибка загрузки XML:', error)
            document.querySelectorAll('.container-tovar-for-page-razd').forEach(block => {
                block.innerHTML = '<p>Информация временно недоступна</p>'
            })
        })
})