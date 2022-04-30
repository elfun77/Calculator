//Class 선언
class Calculator {
    constructor(displayElement){
        //생성자 함수를 통해 displayElement의 초기 상태를 정하기 위한 작업을 수행함.
        //this : 인스턴스 자신을 가리킨다.
        this.displayElement = displayElement;
        this.displayContent = '';
        //Calculator 클래스 내부의 인스턴스 변수 displayContent에 빈 문자열을 담는다.
        //자료형 : 문자열(따옴표를 표시했기 때문.)
        this.clear()
    }

    //새 메소드(appendNumber) 추가
    //덧셈 기능
    appendNumber(number){
        this.displayContent += number
    }

    //새 메소드(appendOperator) 추가
    //덧셈 기능
    appendOperator(operator){
        this.displayContent += operator
    }

    //새 메소드 updateDisplay 추가
    updateDisplay(){
        this.displayElement.value = this.displayContent
    }

    //새 메소드 clear 추가(AC)
    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }

    //새 메소드 compute 추가
    compute() {
        this.displayContent = eval(this.displayContent.replace('\u00D7','*').replace('\u00F7','/'))
    }
}

const buttons = document.querySelectorAll('button')
//buttons 변수를 자바스크립트 코드에 생성
//CSS 문서 내의 'button' 선택자에 해당하는 모든 요소를 리스트 타입으로 변환
// = 계산기 내부 버튼
const displayElement = document.querySelector('input')
//자바스크립트 코드에 'displayElement'라는 변수 선언
//CSS 문서 내의 'button' 선택자에 해당하는 모든 요소를 리스트 타입으로 변환
// = 계산기에서 입력된 내용

const calculator = new Calculator(displayElement)
//new 함수를 통해 새 객체(Calculator) 생성

//새 리스트 생성
//리스트.forEach(원소=>함수(원소));
//리스트 내의 각 원소를 함수 안에 차례대로 넣음
buttons.forEach(button=> {
    /*
    대상 객체.addEventListener('이벤트명', function 함수명(event){} = '이벤트 만들기')
    HTML 코드에서 부여한 Data type에 따라 콘솔 로그에 표시함.
    button.dataset.type = button의 데이터 타입을 가져옴.
    */ 
    button.addEventListener('click',()=>{
        switch(button.dataset.type){
            case 'operator':
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})