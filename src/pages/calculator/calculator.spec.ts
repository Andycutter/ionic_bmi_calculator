import { CalculatorPage } from './calculator'
import { TestBed } from '@angular/core/testing'
import { IonicPageModule, Platform, NavController, NavParams, Config, App, DomController, Keyboard, GestureController, Form } from 'ionic-angular';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock, ConfigMock, KeyboardMock, FormMock } from 'ionic-mocks'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('AppComponent', () => {
  let fixture, component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [
        IonicPageModule.forChild(CalculatorPage)
      ],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() },
        { provide: Config, useFactory: () => ConfigMock.instance() },
        { provide: Keyboard, useFactory: () => KeyboardMock.instance() },
        { provide: Form, useFactory: () => FormMock.instance() },
        App, DomController, GestureController
      ]
    });

    fixture = TestBed.createComponent(CalculatorPage);
    component = fixture.componentInstance;
  });

  it('should create the calculator page', () => {
    expect(component).toBeTruthy();
    expect(component instanceof CalculatorPage).toEqual(true);
  });

  it('Calculates BMI', () => {
    spyOn(component, 'setBMIMessage')
    component.weight = 100;
    component.height = 200;
    component.calculateBMI();

    expect(component.bmiValue).toEqual(25);
    expect(component.setBMIMessage).toHaveBeenCalled
  });
});