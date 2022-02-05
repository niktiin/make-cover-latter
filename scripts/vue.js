var app = new Vue({
  el: '#editor',
  methods: {
    active_struct_card_next () {
      this.active_struct_card_index++;
      this.raw += this.textarea + '\n';
      this.textarea = ' ';
    },
    is_last_strict_card() {
      if (this.active_struct_card_index == this.struct_cards.length - 1) return true;
      return false;
    },
    edit_raw() {
      this.textarea = this.raw + this.textarea
      this.raw = ''
    },
    get_textarea() {
      return this.raw + '<span class="editor__textarea-active">' + this.textarea + '</span>'
    },
    copy_textarea() {
      navigator.clipboard.writeText(this.raw + this.textarea)
      this.is_show_alert = true;
      setTimeout(() => {
        this.is_show_alert = false;
      }, 2000);
    }
  },
  data: {
    raw: '',
    textarea: '',
    active_struct_card_index: 0,
    is_show_alert: false,
    struct_cards: [
      {
        icon: 'mood',
        title: 'Поприветствуйте рекрутера',
        description: `Любое письмо начинается с персонального приветствия. Очень важно в
        сопроводительном письме указывать имя адресата, к которому вы
        обращаетесь. В большинстве вакансий указывается имя, кому отправлять
        резюме.`
      },
      {
        icon: 'radio_button_unchecked',
        title: 'Напишите, на какую вакансию вы претендуете',
        description: `В первом абзаце укажите, на какую должность вы претендуете,
        а также объясните, где и от кого вы узнали об этой вакансии. В противном
        случае, у работодателя сложится впечатление, что вы отправили универсальное
        сопроводительное письмо без указания конкретной вакансии. Это означает, что
        вы экономите время на написание сопроводительного письма, и тем самым теряете
        доверие работодателя.`
      },
      {
        icon: 'radio_button_unchecked',
        title: `Проведите исследование, соберите информацию. Сфокусируйтесь
        на компании, в которую вы будете писать и на их открытой вакансии.`,
        description: `Для этого вам потребуется пойти дальше первой страницы с
        результатами поиска в гугл. Сайт компании может предоставить вам массу
        информации об ее продуктах, услугах и важных инициативах. Потратьте время на
        то, чтобы ознакомиться с как можно большей информацией о компании. Продемонстрируйте,
        что вы в курсе последних проектов, приобретений и публичных заявлений. Два предложения,
        показывающих, что вы потратили время на поиск информации, могут сыграть важную роль.`
      }
    ]
  }
})