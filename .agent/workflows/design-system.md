---
description: デザインシステム
---

# Design System
meta:
  name: "Design System"
  version: "1.0.0"
  description: "ダッシュボード・ソリューションのためのデザインシステム"
  company: "Ojizou Lab."

# ブランドの核となる価値
brand:
  philosophy:
    - "人間中心設計"
    - "UI/UX"
    - "コミュニケーションデザイン"
    - "ビジュアライゼーション"
  
  mission: "データを活用し、意思決定や投資効率を最適化する"
  
  approach:
    - name: "ペルソナに基づく設計"
      description: "経営層などユーザーのニーズや行動パターンを理解し、それに基づいた情報設計とデザイン制作"
    - name: "データで伝えるストーリー"
      description: "重要な情報を一目で把握できるように、情報の関連性や重要性を明確に示す"
    - name: "視覚化による理解促進"
      description: "複雑なデータや煩雑になりやすい情報を洗練された視覚表現で処理"

# カラーパレット
colors:
  primary:
    main: "#000000"
    description: "メインブランドカラー（ブラック）"
  
  secondary:
    main: "#FFFFFF"
    description: "セカンダリーカラー（ホワイト）"
  
  accent:
    blue: "#0066CC"
    description: "アクセントカラー（データビジュアライゼーション用）"
  
  neutral:
    gray-900: "#1A1A1A"
    gray-800: "#333333"
    gray-700: "#4D4D4D"
    gray-600: "#666666"
    gray-500: "#808080"
    gray-400: "#999999"
    gray-300: "#B3B3B3"
    gray-200: "#CCCCCC"
    gray-100: "#E6E6E6"
    gray-50: "#F5F5F5"
  
  semantic:
    success: "#00CC66"
    warning: "#FFAA00"
    error: "#FF3333"
    info: "#0099FF"

# タイポグラフィ
typography:
  font_families:
    primary:
      name: "Noto Sans JP"
      fallback: "sans-serif"
      usage: "本文、UI要素"
    
    secondary:
      name: "游ゴシック体"
      fallback: "Yu Gothic, sans-serif"
      usage: "見出し"
  
  font_sizes:
    display: "48px"    # 大見出し
    h1: "36px"         # セクションタイトル
    h2: "28px"         # サブセクションタイトル
    h3: "24px"         # 中見出し
    h4: "20px"         # 小見出し
    body-large: "18px" # 本文（大）
    body: "16px"       # 本文
    body-small: "14px" # 本文（小）
    caption: "12px"    # キャプション
  
  font_weights:
    light: 300
    regular: 400
    medium: 500
    bold: 700
  
  line_heights:
    tight: 1.2
    normal: 1.5
    relaxed: 1.8
    loose: 2.0

# スペーシング
spacing:
  scale: "8px"  # ベーススケール
  
  values:
    xs: "4px"    # 0.5x
    sm: "8px"    # 1x
    md: "16px"   # 2x
    lg: "24px"   # 3x
    xl: "32px"   # 4x
    2xl: "48px"  # 6x
    3xl: "64px"  # 8x
    4xl: "96px"  # 12x

# レイアウト
layout:
  container:
    max_width: "1200px"
    padding: "24px"
  
  grid:
    columns: 12
    gutter: "24px"
  
  breakpoints:
    mobile: "320px"
    tablet: "768px"
    desktop: "1024px"
    wide: "1440px"

# コンポーネント
components:
  # セクションコンポーネント
  section:
    types:
      - name: "Pain Points"
        purpose: "課題の提示"
        background: "neutral.gray-50"
        layout: "3カラムグリッド"
      
      - name: "Solution"
        purpose: "解決策の提示"
        background: "primary.main"
        text_color: "secondary.main"
        layout: "3カラムグリッド"
      
      - name: "Result"
        purpose: "結果の提示"
        background: "secondary.main"
        layout: "インライン表示"
      
      - name: "Design"
        purpose: "デザインアプローチの説明"
        background: "neutral.gray-50"
        layout: "3カラムグリッド"
      
      - name: "Flow & Schedule"
        purpose: "プロセスとスケジュールの説明"
        background: "secondary.main"
        layout: "4ステップタイムライン"
      
      - name: "Contact"
        purpose: "問い合わせセクション"
        background: "primary.main"
        text_color: "secondary.main"
  
  # カードコンポーネント
  card:
    variants:
      - name: "problem-card"
        padding: "24px"
        border_radius: "8px"
        shadow: "0 2px 8px rgba(0,0,0,0.1)"
      
      - name: "solution-card"
        padding: "32px"
        background: "transparent"
        border: "1px solid rgba(255,255,255,0.2)"
      
      - name: "step-card"
        padding: "24px"
        border_left: "4px solid accent.blue"
  
  # ボタンコンポーネント
  button:
    variants:
      - name: "primary"
        background: "primary.main"
        color: "secondary.main"
        padding: "16px 32px"
        border_radius: "4px"
        hover:
          background: "neutral.gray-800"
      
      - name: "secondary"
        background: "transparent"
        color: "primary.main"
        border: "2px solid primary.main"
        padding: "16px 32px"
        border_radius: "4px"
        hover:
          background: "neutral.gray-50"
      
      - name: "cta"
        background: "accent.blue"
        color: "secondary.main"
        padding: "20px 48px"
        border_radius: "4px"
        font_size: "18px"
        hover:
          background: "#0052A3"
  
  # タイムラインコンポーネント
  timeline:
    step:
      number_style:
        font_size: "14px"
        color: "neutral.gray-600"
        format: "( 01 )"
      
      duration_style:
        font_size: "16px"
        color: "neutral.gray-700"
        format: "1 week〜"
      
      title_style:
        font_size: "18px"
        font_weight: "bold"
        color: "primary.main"
      
      description_style:
        font_size: "16px"
        line_height: "1.6"
        color: "neutral.gray-700"

# ダッシュボード特有のコンポーネント
dashboard_components:
  visualization:
    types:
      - name: "KPI Card"
        description: "重要指標を表示するカード"
        size: "medium"
        update_frequency: "real-time"
      
      - name: "Status Indicator"
        description: "システム健全性を示すインジケーター"
        states:
          - healthy: "semantic.success"
          - warning: "semantic.warning"
          - critical: "semantic.error"
      
      - name: "Timeline Chart"
        description: "時系列データを表示するチャート"
        style: "line"
        colors:
          - "accent.blue"
          - "semantic.success"
          - "semantic.warning"
      
      - name: "Network Topology"
        description: "ネットワーク構成を可視化"
        style: "node-link diagram"
      
      - name: "Workflow Status"
        description: "ワークフローの進捗状況"
        style: "kanban"
  
  data_display:
    principles:
      - "一目で理解できる情報配置"
      - "情報の関連性を明確に"
      - "重要性に基づく視覚的階層"
      - "非エンジニアでも理解可能"
  
  user_personas:
    - name: "経営層"
      needs:
        - "経営判断に必要な情報"
        - "リアルタイムKPIモニタリング"
        - "迅速な状況把握"
      display_priority: "high-level overview"
    
    - name: "管理者"
      needs:
        - "システム健全性の把握"
        - "統合的な情報管理"
        - "迅速なコミュニケーション"
      display_priority: "operational metrics"
    
    - name: "非エンジニア"
      needs:
        - "視覚的に分かりやすい表示"
        - "専門知識不要の理解"
        - "簡単な操作性"
      display_priority: "simplified visualization"

# インタラクション
interactions:
  transitions:
    duration: "0.3s"
    timing_function: "ease-in-out"
  
  hover_effects:
    - component: "button"
      effect: "background color transition"
    - component: "card"
      effect: "subtle shadow increase"
    - component: "link"
      effect: "underline animation"
  
  scroll_behavior:
    type: "smooth"
    reveal_animation: "fade-in-up"

# アクセシビリティ
accessibility:
  contrast_ratios:
    normal_text: "4.5:1"
    large_text: "3:1"
    interactive_elements: "4.5:1"
  
  focus_indicators:
    style: "2px solid accent.blue"
    offset: "2px"
  
  aria_labels:
    required: true
    description: "すべてのインタラクティブ要素に適切なラベルを付与"

# ワークフロー
workflow:
  phases:
    - number: "01"
      name: "Planning / Study & Select"
      duration: "1 week"
      description: "用途・利用ユーザー・目的のすり合わせ、実装イメージのヒアリング"
      activities:
        - "ヒアリング"
        - "認識合わせ"
        - "多角的な検討"
        - "戦略性とアイデアの統合"
    
    - number: "02"
      name: "Design / Study & Select"
      duration: "1 week〜"
      description: "ニーズや傾向を把握し、構造設計・ワイヤーフレームを作成"
      activities:
        - "構造設計"
        - "ワイヤーフレーム作成"
        - "デザイン企画・検討"
    
    - number: "03"
      name: "Design / Design & Build"
      duration: "1 week〜"
      description: "基本デザインをもとに、整合性と機能性を保持しながら画面を制作"
      activities:
        - "全画面制作"
        - "整合性の確保"
        - "機能性の保持"
        - "デザインを磨き上げる"
        - "実用性と美しさの調和"
    
    - number: "04"
      name: "Implementation"
      duration: "1 week〜"
      description: "Splunkエンジニアによってデザインの設定、表示項目の設定を行い実装"
      activities:
        - "デザイン設定"
        - "表示項目設定"
        - "環境への実装"

# プロジェクトのゴール
goals:
  - "データの見方と使い方を根本から変える"
  - "意思決定や投資効率を最適化する"
  - "非エンジニアでも一目で理解できる可視化"
  - "迅速かつ的確な意思決定を可能にする"
  - "システムの状態を迅速に把握"
  - "コミュニケーションのスピード向上"
  - "運用工数の削減"
  - "属人的な対応の軽減"
  - "情報の一元化"