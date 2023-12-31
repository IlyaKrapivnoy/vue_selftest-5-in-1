<template>
  <HeadSetter
    :title="QUIZ_HEAD.title"
    :name="QUIZ_HEAD.name"
    :content="QUIZ_HEAD.content"
  />
  <main class="container mx-auto px-4 mt-20">
    <h1>Quiz Page</h1>
    <section v-if="!quizCompleted" class="flex flex-col">
      <QuizHeader
        :getCurrentQuestion="getCurrentQuestion"
        :currentQuestion="currentQuestion"
        :totalQuestionsCount="questions.length"
        :currentScore="score"
      />

      <div class="mt-6">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :for="'option' + index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index !== getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>

      <el-button
        type="primary"
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
        class="self-end mt-6"
      >
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next question"
        }}
      </el-button>
    </section>

    <FinishScreen
      v-else
      :currentScore="score"
      :totalQuestionsCount="questions.length"
      @onStartOver="startOver"
    />
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import quizQuestions from "@/data/quiz";
import { QUIZ_HEAD } from "@/data/head";
import HeadSetter from "@/components/common/HeadSetter/HeadSetter.vue";
import FinishScreen from "@/views/Quiz/partials/FinishScreen.vue";
import QuizHeader from "@/views/Quiz/partials/QuizHeader.vue";

const questions = ref(quizQuestions);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected != null && q.answer == q.selected) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }

  quizCompleted.value = true;
};

const startOver = () => {
  quizCompleted.value = false;
  currentQuestion.value = 0;
  questions.value.forEach((q) => {
    q.selected = null;
  });
};
</script>

<style scoped>
.option {
  display: block;
  border: 1px solid #b9b7b7;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.option:hover {
  background-color: #b9b7b7;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

.finish {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 264px);
  align-items: center;
}
</style>
