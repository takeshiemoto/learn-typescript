// データの型
type ArticleType = {
  id: number;
  title: string;
};

// Adapter
class HttpClient {
  static get<T>(path: string): T {
    console.log(path);
    return {} as T;
  }
}

// Apiを抽象化
class ArticleApi {
  static getList(): ArticleType[] {
    return HttpClient.get<ArticleType[]>(`/api/articles`);
  }
  static getOne(id: number): ArticleType {
    return HttpClient.get<ArticleType>(`/api/article/${id}`);
  }
}

// Model
class Article {
  id: number;
  title: string;
  constructor(article: ArticleType) {
    this.id = article.id;
    this.title = article.title;
  }
}

class ArticleList {
  articles: Article[] = [];
  constructor(articleList: ArticleType[]) {
    this.articles = articleList.map((article) => new Article(article));
  }
}

// RepositoryClass: Modelのインスタンスを返す
class ArticleRepository {
  static getArticleList(): ArticleList {
    const articleList = ArticleApi.getList();
    return new ArticleList(articleList);
  }

  static getArticleById(id: number): Article {
    const article = ArticleApi.getOne(id);
    return new Article(article);
  }
}

// FormClass: 画面のユースケース
class ArticleListForm {
  articles: ArticleList | null = null;

  getArticleList(): void {
    this.articles = ArticleRepository.getArticleList();
  }
}

class ArticleDetailForm {
  article: Article | null = null;

  getArticleById(id: number): void {
    this.article = ArticleRepository.getArticleById(id);
  }
}

// ファクトリメソッドでFormオブジェクトを生成してComponentに返す
const articleListFormFactory = (): ArticleListForm => {
  const form = new ArticleListForm();
  form.getArticleList();
  return form;
};

const articleDetailFormFactory = (id: number): ArticleDetailForm => {
  const form = new ArticleDetailForm();
  form.getArticleById(id);
  return form;
};

// 一覧画面
console.log(articleListFormFactory());
// 詳細画面（Routerから渡ってきたidを渡す）
console.log(articleDetailFormFactory(1));
