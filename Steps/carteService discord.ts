// import {BehaviorSubject} from 'rxjs';
// import {Carte} from '../src/app/models/Carte';
// import {map} from 'rxjs/operators';
//
// class CartService {
//   private readonly cartItems$ = new BehaviorSubject<ReadonlyArray<Carte>>(
//     JSON.parse(localStorage.getItem('carte') ?? '[]')
//   );
//   readonly totalItems$ = this.cartItems$.pipe(
//     map(items => items.reduce((prev, { quantity}) => prev + quantity, 0))
//   );
//   readonly totalPrice$ = this.cartItems$.pipe(
//     map(items => items.reduce((prev, { quantity, unitPrice }) => prev + quantity * unitPrice, 0))
//   );
//
//   addItem(newItem: Carte): void {
//     const existingItems = this.cartItems$.value;
//     const items = existingItems.some(item => item.id === newItem.id)
//
//     items  ? existingItems.map(item => (item.id === newItem.id) ? { ...item, quantity: item.quantity + 1 } : item)
//       : [...existingItems, newItem]
//     this.cartItems$.next(items);
//   }
// }
