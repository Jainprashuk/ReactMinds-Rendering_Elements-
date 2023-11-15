import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  questions: any[] = [
    {
      question: 'What is the function of ReactDOM.createRoot()?',
      options: ['It creates a React element', 'It creates a root DOM node managed by React DOM', 'It updates the UI tree on every tick', 'It sets the interval for rendering elements'],
      correctAnswer: ' It creates a root DOM node managed by React DOM'
    },
    {
      question: 'How is a React element rendered into the DOM using ReactDOM.createRoot()?',
      options: ['Through root.createElement()', 'By passing the React element to root.render()', 'By using ReactDOM.render()', 'By calling root.updateElement()'],
      correctAnswer: 'By passing the React element to root.render()'
    },
    {
      question: 'What analogy is used to describe a React element in the provided context?',
      options: ['A snapshot', 'A continuous flow', 'A dynamic component', 'A persistent structure'],
      correctAnswer: 'A snapshot'
    },
    {
      question: 'How can you update the UI in React?',
      options: ['By modifying the existing React element directly', 'By using ReactDOM.update() method', 'By creating a new element and passing it to root.render()', 'By manipulating the DOM directly with JavaScript'],
      correctAnswer: 'By creating a new element and passing it to root.render()'
    },
    {
      question: 'What does React DOM do to update the actual DOM?',
      options: ['Compares elements and updates the DOM based on the comparison', 'Replaces the entire DOM with the new elements', 'Refreshes the page to apply changes', 'Directly modifies the DOM elements'],
      correctAnswer: 'Compares elements and updates the DOM based on the comparison'
    },
    {
      question: 'What is the primary benefit of thinking about the UI at any given moment in React?',
      options: ['It speeds up the rendering process', 'It eliminates the need for creating elements', 'It eliminates a class of bugs related to UI changes over time', 'It automates the rendering of components'],
      correctAnswer: 'It eliminates a class of bugs related to UI changes over time'
    },
    {
      question: 'Which method compares the element and its children to the previous one in React?',
      options: ['ReactDOM.checkChanges()', 'React.compareElements()', 'ReactDOM.compare()', 'Internally handled by React DOM'],
      correctAnswer: 'Internally handled by React DOM'
    },
    {
      question: 'What happens when root.render() is called in React?',
      options: ['It directly updates the DOM elements', 'It creates a new React element', 'It compares elements and updates the DOM as necessary', 'It resets the root DOM node'],
      correctAnswer: 'It compares elements and updates the DOM as necessary'
    },
    {
      question: 'How does React handle updates to the UI tree on every tick efficiently?',
      options: ['By replacing the entire UI tree', 'By applying updates to every element in the tree', 'By creating a new tree and comparing it to the previous one', 'By updating only the necessary parts based on element changes'],
      correctAnswer: 'By updating only the necessary parts based on element changes'
    },
    
  ];
  selectedOption: string | null = null;
  score = 0;
  quizCompleted = false;

  ngOnInit(): void {
    // Initialize the component
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    // Check if the selected option is correct
    if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    // Move to the next question or end the quiz
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reset selected option for the next question
    } else {
      this.quizCompleted = true;
    }
  }

  submitQuiz(): void {
    // Display the final score
    alert(`Your score is: ${this.score}`);
  }
}
