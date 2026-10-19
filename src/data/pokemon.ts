import { PokemonData } from "@/types/pokemon";

/**
 * =============================================================================
 * HƯỚNG DẪN TÙY CHỈNH NỘI DUNG (CUSTOMIZATION GUIDE)
 * =============================================================================
 * Toàn bộ nội dung lời chúc, hình ảnh Pokémon và màu sắc giao diện được lưu tại file này.
 * 
 * 1. ĐỔI HÌNH ẢNH POKÉMON (Sprite):
 *    - Đặt ảnh PNG (nền trong suốt) vào thư mục `public/sprites/`
 *    - Cập nhật đường dẫn ở trường `sprite`: ví dụ "/sprites/bulbasaur.png"
 * 
 * 2. ĐỔI MÀU SẮC (Theme Color):
 *    - Tùy chỉnh mã màu HEX trong object `theme` (primary, secondary, bgSoft,...)
 * 
 * 3. LỜI NHẮN NHỦ RIÊNG (Greeting):
 *    - Chỉnh sửa trường `greeting` (lời thoại hiển thị trong khung thiệp)
 * 
 * 4. NỘI DUNG THƯ CHÚC MỪNG 20/10 (Letter Content):
 *    - `title`: Tiêu đề chính của bức thư
 *    - `subtitle`: Tiêu đề phụ
 *    - `paragraphs`: Mảng các đoạn văn lời chúc (mỗi phần tử là 1 đoạn)
 *    - `signature`: Lời kết / chữ ký ở cuối thư
 * =============================================================================
 */

export const POKEMON_LIST: PokemonData[] = [
  {
    id: "bulbasaur",
    name: "Bulbasaur",
    role: "Kỳ nhông hạt cỏ",
    type: "Cỏ & Độc",
    typeBadge: "GRASS",
    sprite: "/sprites/bulbasaur.png",
    tagline: "Dịu dàng, an yên và kiên định",
    greeting: "Bulba! Tớ mang tới những mầm hoa tươi thắm nhất của khu rừng để tặng bạn hôm nay!",
    soundEffectText: "Bulba-saur!",
    theme: {
      primary: "#16a34a",
      primaryHover: "#15803d",
      secondary: "#bbf7d0",
      bgSoft: "#f0fdf4",
      border: "#1b3858",
      shadow: "#0f243b",
      badgeBg: "#dcfce7",
      badgeText: "#15803d",
      taglineColor: "#15803d",
    },
    letter: {
      badge: "20/10 • SPECIAL DELIVERY • GRASS TYPE",
      title: "Gửi đóa hoa rực rỡ và dịu dàng nhất",
      subtitle: "Chúc mừng Ngày Phụ Nữ Việt Nam 20/10",
      paragraphs: [
        "Nhân ngày 20/10 đặc biệt, Bulbasaur muốn gửi đến bạn lời chúc an lành và ngọt ngào nhất. Giống như nụ hoa trên lưng luôn kiên nhẫn tích lũy ánh nắng để một ngày bung nở rực rỡ, mong rằng bạn cũng luôn trân quý bản thân và mỉm cười mỗi sớm mai.",
        "Cảm ơn bạn vì đã luôn dịu dàng với mọi người xung quanh, nhưng hôm nay hãy để cả thế giới dịu dàng và yêu thương lại bạn nhé! Chúc bạn luôn bình an trong tâm hồn, tươi trẻ như sắc xanh mầm cây và mỗi ngày đều ngập tràn niềm vui.",
        "Hãy luôn tự tin vào con đường mình chọn. Dù ngày nắng hay ngày mưa, bạn vẫn luôn là đóa hoa xinh đẹp và quý giá nhất!",
      ],
      signature: "Từ người luôn dõi theo và chúc bạn hạnh phúc vẹn tròn",
      quote: "Hãy như mầm cỏ xanh: luôn mạnh mẽ vươn lên đón nắng!",
    },
  },
  {
    id: "charmander",
    name: "Charmander",
    role: "Khủng long lửa",
    type: "Lửa",
    typeBadge: "FIRE",
    sprite: "/sprites/charmander.png",
    tagline: "Ấm áp, rực rỡ và tràn đầy nhiệt huyết",
    greeting: "Char char! Ngọn lửa nơi đuôi tớ đang cháy bập bùng để sưởi ấm cho bạn ngày 20/10 này!",
    soundEffectText: "Char-mander!",
    theme: {
      primary: "#ea580c",
      primaryHover: "#c2410c",
      secondary: "#fed7aa",
      bgSoft: "#fff7ed",
      border: "#1b3858",
      shadow: "#0f243b",
      badgeBg: "#ffedd5",
      badgeText: "#c2410c",
      taglineColor: "#c2410c",
    },
    letter: {
      badge: "20/10 • SPECIAL DELIVERY • FIRE TYPE",
      title: "Gửi cô gái luôn tỏa sáng như ngọn lửa ấm",
      subtitle: "Chúc mừng Ngày Phụ Nữ Việt Nam 20/10",
      paragraphs: [
        "Chào ngày 20/10! Charmander xin gửi ngọn lửa nhiệt huyết và năng lượng tích cực nhất đến bạn. Đốm lửa nhỏ ở đuôi Charmander luôn ấm áp bất kể gió lạnh, cũng giống như nụ cười của bạn vậy — luôn sưởi ấm và thắp sáng cho những người xung quanh.",
        "Chúc bạn ngày 20/10 ngập tràn hoa, quà và những lời chúc yêu thương. Chúc cho những ước mơ, đam mê trong bạn luôn bùng cháy rực rỡ, biến mọi thử thách thành bước đệm để chạm tới thành công.",
        "Nhớ nghỉ ngơi thật tốt, ăn món mình thích và tự thưởng cho bản thân thật nhiều niềm vui nhé. Bạn xứng đáng với tất cả những điều tuyệt vời nhất trần đời!",
      ],
      signature: "Gửi ngàn tia ấm áp từ Charmander và người bạn thân thương",
      quote: "Ngọn lửa trong tim bạn chính là điều kỳ diệu nhất!",
    },
  },
  {
    id: "squirtle",
    name: "Squirtle",
    role: "Rùa nước tinh nghịch",
    type: "Nước",
    typeBadge: "WATER",
    sprite: "/sprites/squirtle.png",
    tagline: "Tươi mát, thông minh và vững vàng",
    greeting: "Squirtle squirt! Tớ vừa bơi qua đại dương xanh ngát để mang thông điệp trong trẻo tới tận tay bạn!",
    soundEffectText: "Squir-tle!",
    theme: {
      primary: "#0284c7",
      primaryHover: "#0369a1",
      secondary: "#bae6fd",
      bgSoft: "#f0f9ff",
      border: "#1b3858",
      shadow: "#0f243b",
      badgeBg: "#e0f2fe",
      badgeText: "#0369a1",
      taglineColor: "#0369a1",
    },
    letter: {
      badge: "20/10 • SPECIAL DELIVERY • WATER TYPE",
      title: "Gửi tâm hồn tươi mát và trong trẻo",
      subtitle: "Chúc mừng Ngày Phụ Nữ Việt Nam 20/10",
      paragraphs: [
        "Squirtle gửi lời chào mát lành từ đại dương bao la! Nước vừa mềm mại, linh hoạt lại vừa có sức mạnh vượt qua mọi ghềnh thác. Trong mắt tớ, bạn cũng là một người phụ nữ vừa dịu dàng, khéo léo lại vô cùng kiên cường.",
        "Chúc bạn ngày 20/10 thật thảnh thơi, trút bỏ mọi lo toan công việc để tận hưởng sự yêu chiều. Mong nụ cười của bạn luôn trong trẻo như mặt hồ phẳng lặng, và mỗi ngày trôi qua đều êm đềm, ngập tràn niềm vui bất ngờ.",
        "Dù cuộc sống có những con sóng lớn, chúc bạn luôn vững tay chèo và luôn nhớ rằng: có rất nhiều người luôn yêu quý và cổ vũ bạn từ phía sau!",
      ],
      signature: "Từ đội đặc nhiệm rùa con Squirtle và người bạn đồng hành",
      quote: "Nhẹ nhàng như nước, mạnh mẽ như thủy triều!",
    },
  },
  {
    id: "pikachu",
    name: "Pikachu",
    role: "Chuột điện vui tươi",
    type: "Điện",
    typeBadge: "ELECTRIC",
    sprite: "/sprites/pikachu.png",
    tagline: "Vui tươi, năng động và rạng rỡ",
    greeting: "Pika-pi! Pikachu nạp đầy năng lượng yêu đời và hạnh phúc để gửi tặng bạn hôm nay!",
    soundEffectText: "Pika-chu!",
    theme: {
      primary: "#eab308",
      primaryHover: "#ca8a04",
      secondary: "#fef08a",
      bgSoft: "#fefce8",
      border: "#1b3858",
      shadow: "#0f243b",
      badgeBg: "#fef9c3",
      badgeText: "#854d0e",
      taglineColor: "#854d0e",
    },
    letter: {
      badge: "20/10 • SPECIAL DELIVERY • ELECTRIC TYPE",
      title: "Gửi nguồn năng lượng tích cực và đáng yêu nhất",
      subtitle: "Chúc mừng Ngày Phụ Nữ Việt Nam 20/10",
      paragraphs: [
        "Pika-chuuuu! Ngày 20/10 đến rồi, Pikachu muốn mang đến cho bạn nguồn năng lượng yêu đời và thật nhiều điều may mắn!",
        "Bạn có biết không, sự hiện diện và nụ cười rạng rỡ của bạn luôn có sức hút đặc biệt, truyền cảm hứng vui vẻ cho tất cả những ai may mắn được ở bên cạnh bạn. Cảm ơn bạn vì đã luôn là một phiên bản tuyệt vời và duy nhất.",
        "Chúc bạn một ngày 20/10 nhận được thật nhiều hoa thơm, quà xịn, được ăn ngon và cười vui cả ngày. Đừng bao giờ đánh mất sự hồn nhiên, lấp lánh vốn có của mình nhé!",
      ],
      signature: "Gửi muôn vàn yêu thương từ Pikachu và người bạn thân thương",
      quote: "Tỏa sáng rạng rỡ như tia nắng giữa trời quang!",
    },
  },
];

export function getPokemonById(id: string): PokemonData | undefined {
  return POKEMON_LIST.find((p) => p.id === id);
}

export const DEFAULT_POKEMON_ID = POKEMON_LIST[3].id;
