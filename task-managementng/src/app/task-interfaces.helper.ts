console.log('--- Running Task Interfaces Demo ---');

// 1. Method signatures vs. function property signatures

export interface TaskProcessor {
  // Method signature
  completeTask(taskId: number): string;

  // Function property signature
  assignTask: (taskId: number, assignee: string) => string;
}

// Class implementing TaskProcessor
export class BasicTaskProcessor implements TaskProcessor {
  completeTask(taskId: number): string {
    return `Task #${taskId} marked as completed.`;
  }

  assignTask = (taskId: number, assignee: string): string => {
    return `Task #${taskId} assigned to ${assignee}.`;
  };
}

// 2. Callable interface (function shape)

// Defines a standalone function signature with an optional parameter
export interface TaskBadgeFormatter {
  (title: string, urgent?: boolean): string;
}

// 3. Extending interfaces (extends) and narrowing

export interface Auditable {
  createdBy: string;
  updatedAt: string;
}

export interface Identifiable {
  // readonly prevents changing id after creation
  readonly id: number | string;
}

// Multiple inheritance using extends
export interface TaskItem extends Identifiable, Auditable {
  title: string;
  done: boolean;
}

// Narrowing id from (number | string) to number
export interface SprintTask extends TaskItem {
  readonly id: number;
  sprintNumber: number;
}

// Runner function to execute all examples
export function runTaskInterfacesDemo(): void {
  // Object literal matching TaskProcessor
  const quickProcessor: TaskProcessor = {
    completeTask(taskId) {
      return `Quick complete: Task #${taskId} done.`;
    },
    assignTask: (taskId, assignee) => `Quick assign: Task #${taskId} -> ${assignee}`,
  };

  console.log(quickProcessor.completeTask(101));
  console.log(quickProcessor.assignTask(101, 'Kartik'));

  // Class instance matching TaskProcessor
  const classProcessor: TaskProcessor = new BasicTaskProcessor();
  console.log(classProcessor.completeTask(102));
  console.log(classProcessor.assignTask(102, 'Ananya'));

  // Callable interface implementation
  const formatBadge: TaskBadgeFormatter = (title, urgent = false) =>
    urgent ? `[URGENT] ${title.toUpperCase()}` : title.trim();

  console.log(formatBadge('  fix login bug  '));
  console.log(formatBadge('  server down  ', true));

  // Extended interface with narrowed readonly id
  const sprintTask: SprintTask = {
    id: 205,
    title: 'Build task list UI',
    done: false,
    createdBy: 'Kartik',
    updatedAt: '2026-11-26',
    sprintNumber: 4,
  };

  console.log(`#${sprintTask.id} (Sprint ${sprintTask.sprintNumber}): ${sprintTask.title}`);
}
