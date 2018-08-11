import { CalculatorPage } from "./calculator";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage: CalculatorPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });

  it('should have calculateBMI function', () => {
    spyOn(calculatorpage, 'calculateBMI');

    calculatorpage.calculateBMI()

    expect(calculatorpage.calculateBMI).toHaveBeenCalled(); 
  });

  it('should return calculated bmi', () => {     
    let person = { weight: 50, height: 180 };

    expect(calculatorpage.calculateBMI(person)).toEqual(15.43)
  });

  it('assess should return Excellent', () => {
    let person = { weight: 50, height: 180 };
    
    expect(calculatorpage.calculateBMI(person)).toEqual('underweight');
  });

});