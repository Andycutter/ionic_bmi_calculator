import { TabsPage } from "./tabs";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("TabsPage", () => {
  let tabspage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsPage
      ],
      imports: [IonicModule.forRoot(TabsPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(TabsPage);
    tabspage = fixture.componentInstance;
  });

  it("should create the tabs page", () => {
    expect(tabspage).toBeTruthy();
    expect(tabspage instanceof TabsPage).toEqual(true);
  });

});