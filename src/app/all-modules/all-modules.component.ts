import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import 'rxjs/add/operator/filter';
import { MenuItems } from './../shared/menu-items/menu-items';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrl: './all-modules.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('slideOnOff', [
      state('on', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('off', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('on => off', animate('400ms ease-in-out')),
      transition('off => on', animate('400ms ease-in-out'))
    ]),
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ])
  ]


})

export class AllModulesComponent implements OnInit {
  deviceType = 'desktop';
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  chatToggle = 'in';
  chatInnerToggle = 'on';
  innerHeight: string;
  isScrolled = false;
  isCollapsedMobile = 'no-block';
  toggleOn = true;
  windowWidth: number;
  menu_listJSON: any[] = [];
  @ViewChild('searchFriends', /* TODO: add static flag */ { static: false }) search_friends!: ElementRef;
  @ViewChild('toggleButton', /* TODO: add static flag */ { static: false }) toggle_button!: ElementRef;
  @ViewChild('sideMenu', /* TODO: add static flag */ { static: false }) side_menu!: ElementRef;


  activeMenu: any = null; // Track the currently active menu

  config: any;
  expandedMenuIndex: number | null = null;

  toggleMenu(index: number): void {
    this.expandedMenuIndex = this.expandedMenuIndex === index ? null : index;
  }
  constructor(public menuItems: MenuItems) {
    console.log(menuItems.getAll());

    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributs(this.windowWidth);
  }

  ngOnInit() {
    this.toggleChat();
    this.toggleChatInner();
    this.menu_listJSON = [
      {
        "header": "Overview",
        "icon": "assets/img/icon/dashboard.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/dashboard.svg",
              "link": "dashboard",
              "name": "Dashboard",
              "imgUrl": null,
              "priority": 1,
              "header": "Overview",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            },
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/employee-dir.svg",
              "link": "empList",
              "name": "Employee List",
              "imgUrl": null,
              "priority": 2,
              "header": "Overview",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/hirerarchy.svg",
              "link": "hierarchy",
              "name": "Hierarchy",
              "imgUrl": null,
              "priority": 3,
              "header": "Overview",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": "",
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/leave-calender.svg",
              "link": "setup/holidayCalendar",
              "name": "Holiday Calendar",
              "imgUrl": null,
              "priority": 4,
              "header": "Overview",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Me",
        "icon": "assets/img/icon/expense.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/expense.svg",
              "link": "expenses",
              "name": "Expenses",
              "imgUrl": null,
              "priority": 8,
              "header": "Me",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/leave-history.svg",
              "link": "leavehistory",
              "name": "Leave History",
              "imgUrl": null,
              "priority": 9,
              "header": "Me",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": "",
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/expense.svg",
              "link": "loanApplication",
              "name": "Loan App",
              "imgUrl": null,
              "priority": 692,
              "header": "Me",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Time Management",
        "icon": "assets/img/icon/attendance-summary.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/attendance-summary.svg",
              "link": "attendance/admin",
              "name": "Attendance Summary",
              "imgUrl": null,
              "priority": 20,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/dailyroaster.svg",
              "link": "dailyRoster",
              "name": "Daily Roster",
              "imgUrl": null,
              "priority": 21,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": "",
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/leave-calender.svg",
              "link": "leavecalendar",
              "name": "Leave Calendar",
              "imgUrl": null,
              "priority": 22,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/shifts-assignment.svg",
              "link": "assignshifts",
              "name": "Shifts Assignment",
              "imgUrl": null,
              "priority": 24,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/attendance-log.svg",
              "link": "all-payroll-employees/emp_timesheet",
              "name": "Attendance Log",
              "imgUrl": null,
              "priority": 25,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/biometric-log.svg",
              "link": "all-payroll-employees/timesheetlogs",
              "name": "Biometric Logs",
              "imgUrl": null,
              "priority": 26,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/ot-employee-icon.svg",
              "link": "OtEmployees",
              "name": "OT Employees",
              "imgUrl": null,
              "priority": 27,
              "header": "Time Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Payroll Management",
        "icon": "assets/img/icon/employee-dir.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/employee-dir.svg",
              "link": "all-payroll-employees",
              "name": "Employee Directory",
              "imgUrl": null,
              "priority": 36,
              "header": "Payroll Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/payroll-master.svg",
              "link": "payroll-master",
              "name": "Payroll Master",
              "imgUrl": null,
              "priority": 36,
              "header": "Payroll Management",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/run-payroll.svg",
              "link": "payroll-master/Runpayroll",
              "name": "Run Payroll",
              "imgUrl": null,
              "priority": 37,
              "header": "Payroll Management",
              "menuType": "SIDEMENU",
              "privType": "APPROVE,READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/payroll-master.svg",
              "link": "payroll-master/showRuns",
              "name": "Payroll Summary",
              "imgUrl": null,
              "priority": 38,
              "header": "Payroll Management",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/employee-dir.svg",
              "link": "payroll-master/payslips",
              "name": "Download Payslips",
              "imgUrl": null,
              "priority": 39,
              "header": "Payroll Management",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Administration",
        "icon": "assets/img/icon/Add-user.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/Add-user.svg",
              "link": "user-list",
              "name": "Create User",
              "imgUrl": null,
              "priority": 40,
              "header": "Administration",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": "",
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/role-maping.svg",
              "link": "rolemapping",
              "name": "Role Mapping",
              "imgUrl": null,
              "priority": 43,
              "header": "Administration",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": "",
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Reports",
        "icon": "assets/img/icon/shift-report.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/shift-report.svg",
              "link": "rpt",
              "name": "All Reports",
              "imgUrl": null,
              "priority": 131,
              "header": "Reports",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      },
      {
        "header": "Setup",
        "icon": "assets/img/icon/setup.svg",
        "subHeaders": [
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/setup.svg",
              "link": "setup",
              "name": "Organization Setup",
              "imgUrl": null,
              "priority": 670,
              "header": "Setup",
              "menuType": "SIDEMENU",
              "privType": "READ,WRITE",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/Time-Setup.svg",
              "link": "timesetup",
              "name": "Time Setup",
              "imgUrl": null,
              "priority": 672,
              "header": "Setup",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          },
          {
            "subHead": {
              "menuId": null,
              "icon": "assets/img/icon/payroll-setup.svg",
              "link": "payrollsetup",
              "name": "Payroll Setup",
              "imgUrl": null,
              "priority": 673,
              "header": "Setup",
              "menuType": "SIDEMENU",
              "privType": "READ",
              "category": null,
              "moduleCode": null
            }
          }
        ]
      }
    ]
  }



  onClickedOutside(e: Event) {
    if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
    }
  }

  onResize(event: any) {
    this.innerHeight = event.target.innerHeight + 'px';
    /* menu responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }

    if (reSizeFlag) {
      this.setMenuAttributs(this.windowWidth);
    }
  }

  setMenuAttributs(windowWidth: any) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.deviceType = 'tablet';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'push';
    } else if (windowWidth < 768) {
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  searchFriendList(event: any) {
    const search = (this.search_friends.nativeElement.value).toLowerCase();
    let search_input: string;
    let search_parent: any;
    const friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
    Array.prototype.forEach.call(friendList, function (elements, index) {
      search_input = (elements.innerHTML).toLowerCase();
      search_parent = (elements.parentNode).parentNode;
      if (search_input.indexOf(search) !== -1) {
        search_parent.classList.add('show');
        search_parent.classList.remove('hide');
      } else {
        search_parent.classList.add('hide');
        search_parent.classList.remove('show');
      }
    });
  }

  toggleChat() {
    this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
    console.log(' this.chatToggle', this.chatToggle);

  }

  toggleChatInner() {
    this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
    console.log(' this.chatInnerToggle', this.chatInnerToggle);

  }

  toggleOpened() {
    if (this.windowWidth < 768) {
      this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
  }
  onMobileMenu() {
    this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onScroll(event: any) {
    this.isScrolled = false;
  }

}
