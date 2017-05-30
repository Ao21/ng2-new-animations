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
      query(':leave', animateChild(), { optional: true }),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]),

  trigger('homeAnimation', [
    transition(':enter', [
      query('@testAnim', [
        style({ position: 'absolute', top: 0 }),
        animateChild()
      ],
        { optional: true })
    ]),
    transition(':leave', [
      query('@testAnim', [
        style({ position: 'absolute', top: 0 }),
        animateChild()
      ], { optional: true })
    ])
  ]),

  trigger('aboutAnimation', [
    transition(':enter', [
      query('@testAnim', [
        style({ position: 'absolute', top: 0 }),
        animateChild()
      ], { optional: true })
    ]),
    transition(':leave', [
      query('@testAnim', [
        style({ position: 'absolute', top: 0 }),
        animateChild()
      ], { optional: true })
    ])
  ]),


  trigger('testAnim', [
    transition(':enter', [
      animateChild(),
      animate('400ms', style({ transform: 'scale(1.1)', color: 'red' })),

    ]),
    transition(':leave', [
      animateChild(),
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
    // state('void', style({ transform: 'translateX(-250px)' })),
    // state('true', style({ transform: 'translateX(0)' })),
    // transition('* => *', [
    //   animate(500)
    // ]),

    transition(':enter', [
      style({ transform: 'translateX(-250px)' }),
      animate('350ms', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)' }),
      animate('350ms', style({ transform: 'translateX(-250px)' }))
    ])
  ])


]
