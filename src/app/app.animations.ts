import {
  trigger,
  state,
  style,
  animate,
  query,
  animateChild,
  transition
} from '@angular/animations';

export const ANIMATIONS = [
  trigger('routerAnimations', [
    transition('* => *', [
      query(':leave', [
        style({ position: 'absolute', top: 0, transform: 'translateY(0)' }),
        animate('2s', style({ transform: 'translateY(-250px)' })),
        animateChild(),

      ], { optional: true }),
      query(':enter', [
        style({ position: 'absolute', top: 0, transform: 'translateY(-250px)' }),
        animate('2s', style({ transform: 'translateY(0)' })),
        animateChild(),
      ], { optional: true }),
    ])
  ]),

  trigger('homeAnimation', [
    transition(':enter', [
      query('@testAnim', [
        animateChild()
      ], { optional: true }),

      query('@animateItem', [
        style({ transform: 'translateX(-250px)' }),
        animate('350ms', style({ transform: 'translateX(0)' }))
      ], { optional: true }),


    ]),
    transition(':leave', [
      query('@testAnim', [
        animateChild()
      ], { optional: true }),


    ])
  ]),

  trigger('aboutAnimation', [
    transition(':enter', [
      query('@testAnim', [
        animateChild()
      ], { optional: true })
    ]),
    transition(':leave', [
      query('@testAnim', [
        animateChild()
      ], { optional: true })
    ])
  ]),


  trigger('testAnim', [
    transition(':enter', [
      animate('400ms', style({ transform: 'scale(1.1)', color: 'red' })),


    ]),
    transition(':leave', [
      animate('400ms', style({ transform: 'scale(0.8)', color: 'blue' })),


    ])
  ]),

  trigger('listAnimation', [
    transition(':enter', [
      query(':enter',
        animateChild(),
        { optional: true }),
      query(':leave',
        animateChild(),
        { optional: true })
    ])
  ]),

  trigger('titleComponent', [
    transition(':enter', [
      query('@animateItem', animateChild()),
    ]),
    transition(':leave', [
      query('@animateItem', animateChild()),
    ])
  ]),

  trigger('animateItem', [
  //   state('void', style({ transform: 'translateX(-250px)' })),
  //   state('true', style({ transform: 'translateX(0)' })),
  //   transition('* => *', [
  //     animate(500)
  //   ]),

  //   transition(':enter', [
  //     style({ transform: 'translateX(-250px)' }),
  //     animate('350ms', style({ transform: 'translateX(0)' }))
  //   ]),
  //   transition(':leave', [
  //     style({ transform: 'translateX(0)' }),
  //     animate('350ms', style({ transform: 'translateX(-250px)' }))
  //   ])
  ])


]
