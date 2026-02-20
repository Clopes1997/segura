import { isPt } from '../../lib/locale';

interface TopMenuProps {
  content: {
    becomePartner: string;
    contact: string;
    support: string;
    docs: string;
  };
  lang: 'en' | 'pt' | 'pt-br';
}

export default function TopMenu({ content, lang }: TopMenuProps) {
  const docsUrl = isPt(lang)
    ? 'https://docs.senhasegura.io/docs/pt/senhasegura'
    : 'https://docs.senhasegura.io/docs/en/senhasegura';
  const becomePartnerUrl = isPt(lang) ? '/pt-br/parceiros/torne-se-parceiro.html' : '/partners/become-a-partner.html';
  const contactUrl = isPt(lang) ? '/pt-br/contato.html' : '/contact.html';
  const supportUrl = isPt(lang) ? '/pt-br/servicos/centro-de-solucoes.html' : '/services/solution-center.html';

  return (
    <section className="top-menu w-full py-3 bg-almost-white">
      <div className="top-container container mx-auto w-full max-lg:max-w-full">
        <ul className="px-0 sm:px-1 lg:px-3 flex justify-around lg:justify-end items-center gap-1 lg:gap-4 text-sm text-safe-green">
          <li>
            <a href={becomePartnerUrl}>
              <p>
                <b>{content.becomePartner}</b>
              </p>
            </a>
          </li>
          <li>
            <a href={contactUrl}>
              <p>{content.contact}</p>
            </a>
          </li>
          <li>
            <a href={supportUrl}>
              <p>{content.support}</p>
            </a>
          </li>
          <li className="hidden sm:block">
            <a href={docsUrl}>
              <p>{content.docs}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
