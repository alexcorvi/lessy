export default {
  languages: {
    en: 'English',
    fr: 'Français',
  },

  dashboard: {
    page: {
      activationInstructions: 'We sent you an email at {email}.<br />Follow its instructions to be able to access your projects later.',
      createdTasks: 'created tasks',
      finishedTasks: 'finished tasks',
      noTasks: 'There are no tasks to show…',
      projectsInProgress: 'Projects in progress',
      resendActivationInstructions: 'Resend activation instructions',
      resendActivationInstructionsDone: 'Done',
      tasksHistory: 'Tasks history',
      title: 'Dashboard',
    },
  },

  errors: {
    _: {
      login_failed: 'Oops, we failed to log you in, it seems your credentials are wrong.',
      missing_endpoint: 'It seems you’re trying to access an unknown resource. It’s probably not your fault and we are sorry about that. We’ll try to fix it quickly!',
      registration_disabled: 'Registration is disabled, you’re not authorized to create an account.',
      tos_not_accepted: 'Terms of service have changed. Please refresh the page to continue.',
      unauthorized: 'You’re not authorize to perform this action, please refresh the page and re-login.',
    },

    project: {
      parameter_missing: 'Project is required.',
      record_not_found: 'Project cannot be found.',

      due_at: {
        cannot_be_before_started_at: 'Due date cannot be set before today.',
        cannot_be_set: 'Due date cannot be set yet.',
        must_be_set: 'Due date is required.',
        parameter_missing: 'Due date is required.',
      },

      finished_at: {
        cannot_be_after_today: 'Finished date cannot be set after today.',
        cannot_be_before_started_at: 'Due date cannot be set before started date.',
        cannot_be_set: 'Finished date cannot be set yet.',
        must_be_set: 'Finished date is required.',
        parameter_missing: 'Finished date is required.',
      },

      name: {
        blank: 'Name is required.',
        parameter_missing: 'Name is required.',
        too_long: 'Name is too long (max 100 characters).',
      },

      slug: {
        invalid: 'Something went wrong when saving the project (does its name contain any special characters?). Please choose another name.',
        taken: 'This name is similar to another of your project names, please try to change it.',
      },

      state: {
        invalid_transition: 'You’re trying to perform an action which should not normally be possible, we are sorry about that!',
        reached_max_started: 'You cannot start more than three projects.',
      },
    },

    task: {
      parameter_missing: 'Task is required.',
      record_not_found: 'Task cannot be found.',

      label: {
        parameter_missing: 'Label is required.',
      },

      state: {
        invalid_transition: 'You’re trying to perform an action which should not normally be possible, we are sorry about that!',
      },
    },

    user: {
      parameter_missing: 'User is required.',
      record_not_found: 'User cannot be found.',
      user_inactive: 'Your account has never been activated.',

      email: {
        parameter_missing: 'Username is required.',
        taken: 'An account already exists with this email address.',
      },

      password: {
        parameter_missing: 'Username is required.',
      },

      username: {
        exclusion: 'Username is a reserved word.',
        invalid: 'Username does not match the required pattern.',
        parameter_missing: 'Username is required.',
        taken: 'This username is not available.',
        too_long: 'Username is too long (max 25 characters).',
      },
    },
  },

  general: {
    homePage: {
      browserTitle: 'Welcome',
      title: 'Recover your power to manage time',
      intro: 'Collect, organize and focus on what really matters, never say “I don’t have time” again.',

      registrationDisabled: 'Unfortunately, registrations are <strong>closed</strong> for the moment.',
      login: 'Have an account? Log in',

      detailsTitle: 'A respectful and ethical time manager',
      timeTitle: 'Time is a precious resource',
      timeDetails: 'Time is a one-way road and never can be recovered but it’s never too late to start to use it consciously. If you feel it’s time to change a little something in your habits, Lessy will help you to explore the path thoroughly.',
      lessTitle: 'Less cognitive load, less stress',
      lessDetails: 'Lessy supports you in your daily routine by presenting what you most likely want to do first.<br />Do you feel exhausted of your day already? Don’t worry, we all follow our own pace and Lessy knows that.',
      communityTitle: 'Built by an open community',
      communityDetails: 'Time is too important to be handed over to private companies. Lessy is a free software built by a welcoming community of users with same concerns as yours.<br /><a href="https://github.com/lessy-community/lessy/blob/master/CONTRIBUTING.md"> You can participate to make it better too!</a>',

      moreTitle: 'Go further',
      exploreTitle: 'Explore source code',
      exploreDetails: 'Because Lessy is <a href="https://github.com/lessy-community/lessy/blob/master/LICENSE">free</a> and always will be.',
      hostTitle: 'Host it',
      hostDetails: 'Data is yours and we don’t want to be a centralized service.',
      donateTitle: 'Donate',
      donateDetails: 'It helps us maintaining the service opened to everyone.',

      madeWithLove: 'Made with ♥ by <a href="https://github.com/lessy-community/lessy/blob/master/CONTRIBUTORS.md">amazing contributors</a>.',
      greetings: 'Have a great day!',
    },

    loadingPage: {
      reset: 'Reset your session',
      title: 'Loading…',
      tooLong: 'The loading takes too much time. It is sometimes useful to reset your session and re-login.',
      wait: '— Please sit and relax —',
    },

    notFoundPage: {
      home: 'Home page',
      intro: 'You’ve just got lost. But don’t worry, home isn’t far from here…',
      title: 'Page not found',
    },

    sudoModal: {
      cancel: 'Cancel',
      intro: 'We need to verify your identity, please enter your current password to continue.',
      more: 'You are entering “sudo” mode. We won’t ask for your password again for the next 15 minutes.',
      passwordLabel: 'Password',
      submit: 'Confirm',
      title: 'Identity check',
    },

    termsOfServicePage: {
      accept: 'I read and accept terms',
      changed: 'Terms of service have changed, you should read them carefully.',
      goBack: 'Go back to the main page',
      loading: 'Loading, please wait…',
      title: 'Terms of service',
      version: 'Version: {version}',
    },

    termsOfServiceModal: {
      intro: 'Heads up! Our terms of service have recently changed and we want to be sure that you read it and you understand their implications.',
      mustAccept: 'To continue to use our service, you’ll have to agree to those new terms.',
      read: 'Read the terms of service',
      title: 'Terms of service',
    },
  },

  layouts: {
    application: {
      brand: 'Lessy',
      dashboard: 'Dashboard',
      projects: 'Projects',
      tasks: 'Tasks',
      today: 'Today',
    },

    default: {
      brand: 'Lessy',
    },

    empty: {
      brand: 'Lessy',
    },

    singleForm: {
      brand: 'Lessy',
    },

    profile: {
      backToApp: 'Back to application',
      brand: 'Lessy',
      profile: 'Profile',
      title: 'Profile',
    },
  },

  ly: {
    form: {
      input: {
        optional: 'optional',
        revealPassword: 'Reveal',
      },

      select: {
        change: 'Change',
        noOptions: 'The filter matches no options',
        unselect: 'Unselect',
      },
    },
  },

  onboarding: {
    page: {
      title: 'Welcome aboard',
      finish: 'Start to use Lessy',
      next: 'Continue',
      skip: 'Skip the onboarding',

      steps: 'Step {step} on {maxSteps}',
      almostEnd: '(almost finished, keep going)',
      end: '(this is the end)',

      step1: {
        title: 'Onboarding',
        intro: 'Welcome on Lessy! The next screens will explain you the main concepts of the application, especially the few rules that can be considered as painful the first time you use Lessy (they are not if you understand them!)',
        skipInfo: 'If you feel confident, you can skip the onboarding though; it will be still accessible via your “profile” page if you want to take it later.',
      },

      step2: {
        title: 'Creating tasks',
        intro: 'In the first place, you should create some tasks. A task is the smaller unite of work and should be named carefully. Basic advice are:',
        advice: [
          'start your task with a verb of action',
          'keep your tasks understandable (it would be pity not to remember what a task was about a few days later)',
          'keep your tasks simple (if you need more than an hour to finish it, try to split it in smaller tasks)',
        ],
        action: 'Let’s try to create at least 3 tasks. What do you need to do?',
        next: 'Once you are done, click on “Continue”.',
      },

      step3: {
        title: 'Keeping your backlog alive',
        intro: 'By default, the tasks are placed into a “Backlog”: this is just a list of tasks waiting to be done. Here’s your current backlog:',
        live: 'It is important to keep your tasks living or it is very likely you get bored of Lessy. The usual time to live for a task is estimated to no more than 2 weeks if you want to be sure to do it. Also, try to keep the number of tasks under 30. Therefore, it is recommended not to plan too long in advance.',
        indicator: 'An indicator helps you to keep track of the number of weeks since you created the task. It becomes yellow from 2 weeks old and red from 3 weeks old:',
        tasksLabel: 'A {count} weeks old task',
        advice: 'If a task takes too long to be done, it is recommended to rename it, to split it in smaller tasks, to transform it into a project (more on that later) or to abandon it. It’s up to you to determine what’s the best option.',
      },

      step4: {
        title: 'Planning tasks',
        intro: 'The last thing to know about tasks is you can’t mark them as “done” if you don’t plan them.',
        planning: 'Every day, Lessy will ask you what are your 3 most important tasks to accomplish today. “3” is just enough to feel productive if you do them but not too much so you don’t feel overwhelmed immediately. You’ll be able to plan more tasks of course if you need to.',
        startJourney: 'Start your journey',
        startJourneyNoop: 'Sorry, this button does nothing but you’ll be able to plan tasks once you’ve completed the onboarding.',
        ending: 'Finally, at the end of the day (starting from 6PM), Lessy offers you to mark some more tasks as done even if you didn’t plan or create them before. This is especially useful to boost your morale when your day didn’t go as you hoped.',
      },

      step5: {
        title: 'Creating projects',
        intro: 'You may have sometimes a large amount of work coming to you and feel that you need to better organize your tasks. It is time to present the projects.',
        what: 'A project can be seen as a global objective you give to you (e.g. Find a new job). It can contain textual information that you need to have at hand and it allows you to group tasks within a logic category.',
        bigTask: 'As it was said earlier, a task can be transformed into a project. Per se, a project can also be considered as a “big task”.',
        action: 'Let’s create a project. What do you want to accomplish within the next year?',
        note: 'Please note that “Project” may be a term too vague. It is planned to change this concept for something more natural in the future.',
      },

      step6: {
        title: 'Running projects',
        intro: 'In order to have project tasks appearing in your backlog, you’ll have to start the project first and give it a due date. But because a project is usually asking for a lot of your time, there is a limit to the running projects set to 3. Therefore, you have to choose your projects carefully. A question to ask yourself is: “What needs to be done most quickly?”',
        start: 'Do you want to start your project?',
        started: 'Here’s your first running project:',
        startProject: 'Start a project',
        alwaysTasks: 'In order to encourage you to move your projects forward, Lessy will remind you to attach tasks to them if all are done (you’ll do it later, let’s finish the onboarding first).',
        finish: 'When you complete all your tasks and you think there is no more to be done, it probably means you should mark your project as finished. It will free a slot for your next project… or maybe you’ll want to enjoy a rest?',
      },

      step7: {
        title: 'You’re ready!',
        intro: 'Well done, you’ve completed the onboarding (it was a rather long one). You’ve discovered the main concepts of Lessy and you should now be able to use it successfully.',
        tool: 'Note that you’re only using a tool which is not magic. If you want it to be effective you’ll have to be part of the process and so accept the principles which was explained during this onboarding. Maybe it’s not a good fit with your needs: that’s OK. Lessy just gives some advice based on experience but you may have a very different one. We encourage you to find the right tool (we know it’s not an easy task).',
        community: 'Please remember Lessy is developed by a community with more or less time to give to the project. If it doesn’t fit your needs, you can also help us to improve it.',
        join: 'Join us!',
      },
    },
  },

  profile: {
    deleteAccount: {
      submit: 'Delete your account',
      understand: 'I understand',
      understandLabel: 'Enter “I understand” to be able to delete your account',
      warn: '<strong>Please be careful</strong>, deleting your account cannot be canceled and all your data will be lost then.',
    },

    identityEditForm: {
      emailLabel: 'Email',
      passwordLabel: 'New password',
      saved: 'Saved!',
      submit: 'Edit your identity',
      usernameCaption: 'Only lowercase letters, underscore and dash (max 25 characters).',
      usernameLabel: 'Username',
    },

    languageForm: {
      languageLabel: 'Interface language',
      saved: 'Saved!',
    },

    page: {
      account: 'Account',
      activationInstructions: 'Some sections of the profile are disabled because you didn’t activate your account yet. We sent you an email at {email}.<br />Follow its instructions to be able to access your projects later.',
      identity: 'Identity',
      language: 'Language',
      needHelp: 'You fill lost and need some help?',
      onboard: 'Get onboard!',
      password: 'Password',
      resendActivationInstructions: 'Resend activation instructions',
      resendActivationInstructionsDone: 'Done',
      timeZone: 'Time zone',
    },

    passwordNewForm: {
      passwordLabel: 'New password',
      saved: 'Saved!',
      submit: 'Change your password',
    },

    timeZoneForm: {
      autodetect: 'Configure automatically',
      autodetectInfo: 'We detected that your current time zone is different from the one of your operating system. It is highly recommended to synchronize both timezones.',
      saved: 'Saved!',
      timeZoneCaption: 'We use your time zone to manage the dates correctly.',
      timeZoneLabel: 'New time zone',
      timeZonePlaceholder: 'Europe/London',
    },
  },

  projects: {
    card: {
      shouldAddTasks: 'Usually, a living project holds unfinished tasks.',
      tasksCount: '{finishedCount} / {totalCount} task | {finishedCount} / {totalCount} tasks',
    },

    cardDeck: {
      empty: 'No project',
      emptyLink: 'Start an existing project',
    },

    createForm: {
      cancel: 'Cancel',
      created: 'Created',
      submit: 'Create',
      nameCaption: 'Maximum 100 characters.',
      placeholder: 'Holidays in Paris',
    },

    editForm: {
      cancel: 'Cancel',
      descriptionLabel: 'Description',
      descriptionCaption: 'Description supports Markdown',
      dueLabel: 'Due on',
      nameLabel: 'Name',
      nameCaption: 'Max 100 characters.',
      submit: 'Validate',
    },

    finishForm: {
      cancel: 'Cancel',
      finishedLabel: 'Finished on',
      finishedCaption: 'It cannot be after today',
      submit: 'Finish project',
    },

    item: {
      pausedOn: 'paused on {date}',
      tasksCount: '{finishedCount} / {totalCount} task | {finishedCount} / {totalCount} tasks',
    },

    itemFinished: {
      finishedLabel: 'finished on {date}',
      tasksCount: '{finishedCount} / {totalCount} task | {finishedCount} / {totalCount} tasks',
    },

    header: {
      title: 'Projects',
    },

    modals: {
      deleteTitle: 'Delete a project',
      deleteIntro: 'Do you really want to delete the project “{projectName}”? Its associated tasks will be marked as abandonned and you’ll not have access to them anymore.',
      deleteConfirm: 'Delete the project',
      deleteCancel: 'Cancel',

      editDueDateTitle: 'Edit project’s due date',
      finishTitle: 'Finish project',
      finishIntro: 'Have you finished “{projectName}”? That’s great! Let us know when you finished it:',
      startNewTitle: 'Start a project',
      startTitle: 'Start project',
    },

    page: {
      createProject: 'Create a project',
      finishedProjects: 'Finished projects',
      futureProjects: 'Future projects',
      projectsInProgress: 'Projects in progress',
      projectsPlaceholder: "You don't have any projects yet, what are you working on?",
    },

    showPage: {
      associatedTasks: 'Associated tasks',
      delete: 'Delete',
      edit: 'Edit',
      finishedTasks: 'Finished tasks',
      noDescription: 'There is no description for this project yet.',
      timeline: 'Timeline',
    },

    startForm: {
      cancel: 'Cancel',
      dueLabel: 'Due on',
      dueCaption: 'The due date has to be after today',
      nameLabel: 'Name',
      submit: 'Start it now',
    },

    startNewForm: {
      cancel: 'Cancel',
      dueLabel: 'Due on',
      dueCaption: 'The due date has to be after today',
      noProjects: 'You have no projects yet so let’s create one!',
      projectLabel: 'Project',
      submit: 'Start the project',
    },

    timeline: {
      diff: '{days} day | {days} days',
      dueOn: 'Due on {date}',
      dueOnEdit: 'Edit due date',
      dueToday: 'due today',
      finish: 'Finish',
      finishedOn: 'finished on {date}',
      late: 'late',
      notStarted: 'not started',
      pause: 'Pause',
      pausedOn: 'paused on {date}',
      reachedMaxInProgress: 'You already reached the maximum number of started projects.',
      restart: 'Restart',
      start: 'Start',
      startedOn: 'Started on {date}',
      untilDueDate: 'before due date',
    },
  },

  tasks: {
    attachProjectForm: {
      cancel: 'Cancel',
      projectLabel: 'Project',
      submit: 'Attach',
    },

    chart: {
      created: 'tasks created',
      finished: 'tasks finished',
    },

    completeDay: {
      addFinishedTasks: 'If you completed some other tasks during the day, you can add them now.',
      cancel: 'Continue to work',
      intro: 'It’s the end of the day and it’s time to get some rest.',
      ok: 'Complete',
      summary: {
        allDone: 'You’ve finished all the tasks you’ve planned, that’s great!',
        neutral: 'You’ve finished {finishedCount} task out of {totalCount}. | You’ve finished {finishedCount} tasks out of {totalCount}.',
        nothingDone: 'You completed no tasks today… never mind!',
        nothingPlanned: 'You didn’t plan anything for today, that’s fine!',
      },
      unfinishedToBacklog: 'The tasks you didn’t finish will be available in your backlog tomorrow.',
    },

    createForm: {
      cancel: 'Cancel',
      created: 'Created',
      submit: 'Create',
      warningTooMany: 'You might face difficulties to achieve all your tasks if you try to do too much.',
      placeholder: 'Walk the dog',
    },

    editForm: {
      cancel: 'Cancel',
      submit: 'Update',
    },

    indicators: {
      replanned: 'You’ve replanned this task once | You’ve replanned this task {count} times, what about splitting or renaming it so it would be easier to achieve?',
      startedSinceWeeks: 'You’ve started this task 1 week ago | You’ve started this task {count} weeks ago, it may be time to abandon it, don’t you think?',
      week: '{count}w',
    },

    item: {
      abandon: 'Abandon',
      attachToProject: 'Attach to a project',
      edit: 'Edit',
      markAsDone: 'Mark as done',
      markAsUndone: 'Mark as undone',
      transformInProject: 'Transform into a project',
      unplan: 'Unplan',
    },

    list: {
      empty: 'There are no tasks here…',
    },

    modals: {
      attachProjectTitle: 'Attach task to a project',
      cancel: 'Cancel',
      confirmAbandon: 'The task “{label}” will be marked as abandoned and will disappear from the list. Can you confirm?',
      confirmAbandonTitle: 'Abandon task',
      orPickFromBacklog: 'or pick one from your backlog',
      planTitle: 'Plan a task for today',
      submitAbandon: 'Confirm abandon',
      transformInProjectTitle: 'Transform task into a project',
    },

    page: {
      tasksNumber: '{count} task in backlog | {count} tasks in backlog',
      title: 'Tasks',
    },

    planner: {
      additionalTask: 'Tasks you are going to plan now should not be critical to your day.',
      additionalMostImportantTask: 'This should be one of your most important tasks to achieve today.',
      allFinished: 'You’ve finished all your tasks, well done!',
      empty: 'You did not plan any tasks yet.',
      firstMostImportantTask: 'This should be your most important task to achieve today, choose it carefully.',
      importantTaskPlaceholder: [
        'Plan the second most important task of your day… | Plan the third most important task of your day.',
        '… and your third.',
      ],
      planTask: 'Plan a task',
      startJourney: 'Start your journey',
      tasksForToday: '{count} task for today | {count} tasks for today',
      tasksFinishedToday: '{count} task finished today | {count} tasks finished today',
    },
  },

  today: {
    page: {
      dayCompleted: 'You’re all done, have a nice evening!',
      finishDay: 'Finish your day',
      title: 'Today',
    },
  },

  users: {
    activateForm: {
      passwordLabel: 'Password',
      submit: 'Activate your account',
      usernameLabel: 'Username',
      usernameCaption: 'Only lowercase letters, underscore and dash (max 25 characters).',
    },

    activatePage: {
      intro: 'To continue, you have to pick a unique username and a password so you can login to your account later.',
      title: 'Activate your account',
    },

    loginForm: {
      passwordForgotten: 'You can’t remember your password?',
      passwordLabel: 'Password',
      submit: 'Log in',
      register: 'Create an account',
      usernameLabel: 'Username',
    },

    loginPage: {
      title: 'Log in',
    },

    passwordNewForm: {
      passwordLabel: 'Password',
      submit: 'Change your password',
    },

    passwordNewPage: {
      intro: 'You’re going to change your password. Once done, you’ll be logged in and redirected to the dashboard.',
      title: 'Change your password',
    },

    passwordResetForm: {
      emailLabel: 'Email',
      login: 'Remember your password?',
      register: 'Create an account',
      submit: 'Reset your password',
    },

    passwordResetPage: {
      accountInactive: 'You didn’t activate your account and so we can’t reset your password. Did you receive the email with the activation instructions?',
      emailIntro: 'Please enter the email address related to your account so we’ll send you a link to reset your password.',
      emailSentTo: 'We’ve just sent an email to {email} so you’ll be able to create a new password in a few minutes. If you do not receive our email, please check your spams.',
      login: 'Remember your password?',
      resendActivationInstructions: 'Resend activation instructions',
      resendActivationInstructionsDone: 'Done',
      title: 'Reset your password',
    },

    popover: {
      administration: 'Administrate',
      logout: 'Log out',
      profile: 'Edit profile',
    },

    registerForm: {
      emailLabel: 'Email',
      emailPlaceholder: 'john@doe.com',
      login: 'Have an account? Log in',
      submit: 'Create your account',
      tosMustAccept: 'By clicking “Create your account”, you accept our',
      tosLink: 'terms of service',
    },
  },
}
