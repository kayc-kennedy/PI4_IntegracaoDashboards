-- Venda por Fabricante
SELECT
	pro.fabricante,
	SUM(ite.vlrtot) VLRTOTAL,
	SUM(ite.vlrtotcomdesc) VLRTOTALCOMDESC,
	SUM(ite.vlrdesctot) VLRTOTALDODESCONTO,
	COUNT(DISTINCT ite.codprod) MIXDEPRODUTO,
	COUNT(DISTINCT ite.codparc) MIXDECLIENTE
FROM
	tgfite ite
	INNER JOIN tgfpro pro ON (ite.codprod = pro.codprod)
WHERE
	ite.dtneg BETWEEN /*Param 1 ->*/'2020-05-01' AND /*Param 2 ->*/'2020-06-30'
	/*AND ite.codvend =*/ /*Param 3*/
GROUP BY
	pro.fabricante
ORDER BY
	SUM(ite.vlrtotcomdesc) DESC
