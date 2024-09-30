import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, signal } from "@angular/core";
import { injectQuery } from "@tanstack/angular-query-experimental";

export type TabKey = "first" | "second" | "third";

@Component({
  selector: "app-fail",
  template: `
    <div class="first" [class.selected]="selectedTab() === 'first'" (click)="selectedTab.set('first')">first</div>
    <div class="second" [class.selected]="selectedTab() === 'second'" (click)="selectedTab.set('second')">second</div>
    <div class="third" [class.selected]="selectedTab() === 'third'" (click)="selectedTab.set('third')">third</div>
  `,
  styles: [":host { display: block; }", ".selected { color: red; }"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailComponent {
  constructor() {
    // TODO: This allows you to run window[0].cdr.detectChanges()
    // in the console to manually trigger change detection
    (window as any).cdr = inject(ChangeDetectorRef);
  }

  tabKeys = input<TabKey[]>(["first", "second", "third"]);
  selectedTab = signal<TabKey>("first");

  // TODO: Commenting out this will make the tests pass
  recordTabQuery = injectQuery(() => ({ queryKey: ["NotARealQuery"], queryFn: () => "hi" }));
}
